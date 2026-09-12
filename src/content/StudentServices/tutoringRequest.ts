// The Discord webhook lives in the TUTORS_WEBHOOK environment variable and is
// only read by netlify/functions/tutoring-request.mjs, so it never ships to the browser.
const ENDPOINT = "/api/tutoring-request";

export type TutoringRequest = {
  name: string;
  courses: string;
  email: string;
  availability: string;
};

export async function submitTutoringRequest(
  request: TutoringRequest
): Promise<void> {
  const response = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(request),
  });

  if (!response.ok) {
    throw new Error(`Tutoring request failed with ${response.status}`);
  }
}
