export const students = [
  {
    uid: "108615",
    password: "123456",
    name: "Vishwa Patel",
    email: "vishwa29patel.cg@gmail.com",
    mobile: "6352839671",
    university: "SUxCG 714",

    image: "https://avatars.githubusercontent.com/u/224971540?v=4",

    attendance: {
      semester: "Semester 2",
      present: 130,
      total: 135,
      bonus: 2,
      percentLabel: 98,
      startDate: "29/01/2026",
      endDate: "30/06/2026",
    },

    subjects: [
      "SU11 - GIT & GITHUB",
      "SU12 - C Language",
      "SU13 - HTML/CSS/JS",
      "SU14 - UI/UX FIGMA",
      "SU15 - MATHS",
      "SU16 - JavaScript",
      "SU0201 - ReactJS",
      "SU0202 - NodeJS",
      "SU0203 - NoSQL Database",
      "SU0204 - OOPS(C++)",
      "SU0205 - Maths 2",
      "SU0206 - EVS",
    ],

    mentors: [
      {
        name: "Ankita",
        batch: "SUxCG 714",
      },
    ],

    assignments: 0,
    pendingAssignments: 0,
    events: [],
  },
];
export const loginDetails = (uid, password) => {
  const student = students.find(
    (s) => s.uid === uid && s.password === password,
  );

  if (!student) return false;

  localStorage.setItem("user", JSON.stringify(student));

  return true;
};
