export type Tutor = {
  name: string;
  email: string;
  courses: string;
};

// tutors_list.json is regenerated from the sign-up sheet by the
// "Generate tutors_list.json" workflow, so it is not edited by hand.
export async function loadTutors(): Promise<Tutor[]> {
  const response = await fetch("/tutors_list.json");
  const data = await response.json();

  return data.map((t: any) => ({
    name: t.name,
    email: t.email,
    courses: t.courses,
  }));
}
