export const WEBHOOK_URL =
  "https://discord.com/api/webhooks/1546227360083214446/KcPIO_RKHCfFIG6_HbjL4Tr8oGLh_khX9lduwxq_8GCHRt_H0hjpvEizUoiTA5jwTDzr";

export type TutoringRequest = {
  name: string;
  courses: string;
  email: string;
  availability: string;
};

export async function submitTutoringRequest({
  name,
  courses,
  email,
  availability,
}: TutoringRequest): Promise<void> {
  const body = {
    username: "HKN Tutoring",
    // Keeps @everyone / @here in the submitted text from pinging the channel
    allowed_mentions: { parse: [] },
    embeds: [
      {
        title: "New Tutoring Request",
        color: 0xe84a27,
        timestamp: new Date().toISOString(),
        fields: [
          { name: "Name", value: name },
          { name: "Courses", value: courses },
          { name: "Email", value: email },
          { name: "Availability", value: availability },
        ],
      },
    ],
  };

  const response = await fetch(WEBHOOK_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    throw new Error(`Discord returned ${response.status}`);
  }
}
