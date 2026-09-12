// Requests go through a Cloudflare Worker (see `worker/`) that holds the Discord
// webhook. This URL is public; the webhook itself never reaches the browser.
const WORKER_URL = "https://hkn-tutoring-request.hkn-tutoring.workers.dev";

const ENDPOINT = import.meta.env.DEV ? "http://127.0.0.1:8787" : WORKER_URL;

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
  const response = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, courses, email, availability }),
  });

  if (!response.ok) {
    throw new Error(`Tutoring request failed with ${response.status}`);
  }
}
