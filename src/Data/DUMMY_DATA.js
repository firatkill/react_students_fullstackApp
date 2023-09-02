export const data = {
  students: [
    {
      id: 12,
      studentNumber: 158,
      firstName: "Ahmet",
      lastName: "Özdağ",
      email: "ahmett@gmail.com",
    },
    {
      id: 13,
      studentNumber: 58,
      firstName: "Fırat",
      lastName: "Kıl",
      email: "firatkil@gmail.com",
    },
  ],
  lectures: [
    {
      id: 3,
      name: "physics",
      classroom: "9a",
      studentCapacity: 27,
      teacher: null,
    },
    {
      id: 4,
      name: "maths",
      classroom: "11b",
      studentCapacity: 33,
      teacher: {
        id: 2,
        firstName: "Berker",
        lastName: "Vural",
        email: "berkervural@gmail.com",
      },
    },
    {
      id: 5,
      name: "Philosophy",
      classroom: "10c",
      studentCapacity: 28,
      teacher: {
        id: 3,
        firstName: "Ahmet",
        lastName: "Özaydın",
        email: "ahmetozaydin@gmail.com",
      },
    },
  ],
  teachers: [
    {
      id: 1,
      firstName: "example",
      lastName: "teacher",
      email: "exampleTeacher@gmail.com",
    },
    {
      id: 2,
      firstName: "Berker",
      lastName: "Vural",
      email: "berkervural@gmail.com",
    },
    {
      id: 3,
      firstName: "Ahmet",
      lastName: "Özaydın",
      email: "ahmetozaydin@gmail.com",
    },
  ],
};
