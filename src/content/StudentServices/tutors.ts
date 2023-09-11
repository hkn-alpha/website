type Tutor = {
  name: string;
  email: string;
  /**
   * Comma-separated string of courses
   */
  courses: string;
};

export const tutors: Tutor[] = [
  // {
  //   name: "Grant Mckechnie",
  //   email: "granttm2@illinois.edu",
  //   courses: "ECE 110, ECE 120",
  // },
  // {
  //   name: "Alex Zhang",
  //   email: "alexmz2@illinois.edu",
  //   courses:
  //     "ECE374, CS374, ECE 110, ECE 210, ECE313, ECE220, ECE 120, PHYS 211",
  // },
  {
    name: "Lucas Nguyen",
    email: "lnguy7@illinois.edu",
    courses: "ECE 110, ECE 120, ECE 220",
  },
  {
    name: "Bex Muise",
    email: "rmuise2@illinois.edu",
    courses: "ECE 220, ECE 310, ECE 120",
  },
  {
    name: "Eisa Kamran",
    email: "ekamr2@illinois.edu",
    courses: "ECE 220, ECE 120",
  },
  {
    name: "Udit Pai",
    email: "upai3@illinois.edu",
    courses: "ECE 220, ECE 120, ECE 391, ECE 385",
  },
];
