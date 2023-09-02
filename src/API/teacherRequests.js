const apiRoute = "http://localhost:18181/api";

export const postTeacher = async (teacher) => {
  let response = await fetch(apiRoute + "/teachers", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      firstName: teacher.firstName,
      lastName: teacher.lastName,
      email: teacher.email,
    }),
  });
  response = await response.json();
  console.log(response);
};
