// Forwards tutoring requests to Discord so the webhook URL never reaches the browser.
// The URL lives in the DISCORD_WEBHOOK_URL secret (`npx wrangler secret put DISCORD_WEBHOOK_URL`).

const ALLOWED_ORIGINS = [
  "https://hkn.illinois.edu",
  "https://hkn-alpha.web.app",
  "https://hkn-alpha.firebaseapp.com",
  "http://localhost:5173",
  "http://127.0.0.1:5173",
];

// Discord rejects embed fields longer than this
const MAX_FIELD_LENGTH = 1024;

const FIELDS = [
  { key: "name", label: "Name" },
  { key: "courses", label: "Courses" },
  { key: "email", label: "Email" },
  { key: "availability", label: "Availability" },
];

function corsHeaders(request) {
  const origin = request.headers.get("Origin");
  if (!origin || !ALLOWED_ORIGINS.includes(origin)) return null;
  return {
    "Access-Control-Allow-Origin": origin,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Max-Age": "86400",
    Vary: "Origin",
  };
}

function json(body, status, headers) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json", ...headers },
  });
}

function validate(payload) {
  const values = {};

  for (const { key, label } of FIELDS) {
    const value = typeof payload[key] === "string" ? payload[key].trim() : "";
    if (!value) return { error: `Missing ${label.toLowerCase()}.` };
    if (value.length > MAX_FIELD_LENGTH)
      return { error: `${label} is too long.` };
    values[key] = value;
  }

  if (!/^[^\s@]+@illinois\.edu$/i.test(values.email))
    return { error: "Email must end in @illinois.edu." };

  return { values };
}

export default {
  async fetch(request, env) {
    const cors = corsHeaders(request);

    if (request.method === "OPTIONS") {
      if (!cors) return new Response(null, { status: 403 });
      return new Response(null, { status: 204, headers: cors });
    }

    if (request.method !== "POST")
      return json({ error: "Method not allowed." }, 405, cors ?? {});

    if (!cors) return json({ error: "Origin not allowed." }, 403, {});

    if (!env.DISCORD_WEBHOOK_URL)
      return json({ error: "Server is not configured." }, 500, cors);

    let payload;
    try {
      payload = await request.json();
    } catch {
      return json({ error: "Expected JSON." }, 400, cors);
    }

    const { values, error } = validate(payload ?? {});
    if (error) return json({ error }, 400, cors);

    // Built here rather than accepted from the client, so a caller cannot choose
    // the username, content, or mentions of the Discord message.
    const message = {
      username: "HKN Tutoring",
      // Keeps @everyone / @here in the submitted text from pinging the channel
      allowed_mentions: { parse: [] },
      embeds: [
        {
          title: "New Tutoring Request",
          color: 0xe84a27,
          timestamp: new Date().toISOString(),
          fields: FIELDS.map(({ key, label }) => ({
            name: label,
            value: values[key],
          })),
        },
      ],
    };

    const discordResponse = await fetch(env.DISCORD_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(message),
    });

    if (!discordResponse.ok)
      return json({ error: "Could not deliver the request." }, 502, cors);

    return json({ ok: true }, 200, cors);
  },
};
