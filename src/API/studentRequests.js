const apiRoute = "http://localhost:18181/api";

export const postStudent = async (student) => {
  let response = await fetch(apiRoute + "/students", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      studentNumber: student.studentNumber,
      firstName: student.firstName,
      lastName: student.lastName,
      email: student.email,
    }),
  });
  response = await response.json();
  console.log(response);
};
