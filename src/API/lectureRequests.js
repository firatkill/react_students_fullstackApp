const apiRoute = "http://localhost:18181/api";

export const postLecture = async (lecture) => {
  let lectureResponse = await fetch(apiRoute + "/lectures", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: lecture.name,
      classroom: lecture.classroom,
      studentCapacity: lecture.studentCapacity,
    }),
  });
  lectureResponse = await lectureResponse.json();

  let teacherResponse = await fetch(
    apiRoute +
      "/lectures/" +
      Number.parseInt(lectureResponse.id) +
      "/appendTeacher/" +
      Number.parseInt(lecture.teacher.id),
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    }
  );
  teacherResponse = await teacherResponse.json();
  console.log(lectureResponse);
  console.log(teacherResponse);
};
