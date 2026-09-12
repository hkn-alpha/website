// Proxies tutoring form submissions to Discord so the webhook URL, read from the
// TUTORS_WEBHOOK environment variable, never reaches the browser.

// Discord rejects embed fields longer than 1024 characters
const MAX_FIELD_LENGTH = 1000;

const REQUIRED_FIELDS = ["name", "courses", "email", "availability"];

function json(status, body) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

function clamp(value) {
  const trimmed = value.trim();
  return trimmed.length > MAX_FIELD_LENGTH
    ? `${trimmed.slice(0, MAX_FIELD_LENGTH)}...`
    : trimmed;
}

export default async (req) => {
  if (req.method !== "POST") {
    return json(405, { error: "Method not allowed." });
  }

  const webhookUrl = process.env.TUTORS_WEBHOOK;
  if (!webhookUrl) {
    console.error("TUTORS_WEBHOOK is not set");
    return json(500, {
      error:
        "The tutoring form isn't configured right now. Please email us instead.",
    });
  }

  let payload;
  try {
    payload = await req.json();
  } catch {
    return json(400, { error: "Invalid request body." });
  }

  for (const field of REQUIRED_FIELDS) {
    const value = payload?.[field];
    if (typeof value !== "string" || !value.trim()) {
      return json(400, { error: "Please fill in every field." });
    }
  }

  const { name, courses, email, availability } = payload;
  if (!/^[^\s@]+@illinois\.edu$/i.test(email.trim())) {
    return json(400, {
      error: "Please use your Illinois email (ending in @illinois.edu).",
    });
  }

  const discordResponse = await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: "HKN Tutoring",
      // Keeps @everyone / @here in the submitted text from pinging the channel
      allowed_mentions: { parse: [] },
      embeds: [
        {
          title: "New Tutoring Request",
          color: 0xe84a27,
          timestamp: new Date().toISOString(),
          fields: [
            { name: "Name", value: clamp(name) },
            { name: "Courses", value: clamp(courses) },
            { name: "Email", value: clamp(email) },
            { name: "Availability", value: clamp(availability) },
          ],
        },
      ],
    }),
  });

  if (!discordResponse.ok) {
    console.error(
      `Discord returned ${discordResponse.status}: ${await discordResponse.text()}`
    );
    return json(502, {
      error: "We couldn't deliver your request. Please try again shortly.",
    });
  }

  return json(200, { ok: true });
};
