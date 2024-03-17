package dev.firat.Students_FullStackApp.service.abstracts;


import dev.firat.Students_FullStackApp.entity.Lecture;
import dev.firat.Students_FullStackApp.entity.Student;
import dev.firat.Students_FullStackApp.entity.Teacher;

import java.util.List;

public interface TeacherService {
    Teacher saveTeacher(Teacher teacher);
    Teacher updateTeacher(long id,Teacher teacher);
    Boolean deleteTeacher(long id);
    Teacher getTeacher(Long id);

    List<Teacher> getAllTeachers();

    Boolean appendLecture(long teacherId, long lectureId);

}
