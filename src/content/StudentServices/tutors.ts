type Tutor = {
  name: string;
  email: string;
  courses: string;
};

export let tutors: Tutor[] = [];

// created by Martin
fetch('/tutors_list.json')
  .then((response) => response.json())
  .then((data) => {
    tutors = data.map((t: any) => ({ //instead of using indexing we directly access the field now
      email: t.email, 
      name: t.name,
      courses: t.courses, 
    }));

    console.log(tutors); // Check the parsed Tutor objects
  })
  .catch((error) => console.error('Error loading tutors:', error));