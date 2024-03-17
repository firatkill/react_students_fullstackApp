package dev.firat.Students_FullStackApp.service.abstracts;

import dev.firat.Students_FullStackApp.entity.Lecture;
import dev.firat.Students_FullStackApp.entity.Student;

import java.util.List;

public interface StudentService {
    Student saveStudent(Student student);
    Student updateStudent(long id,Student student);
    Boolean deleteStudent(long id);
    Student getStudent(Long id);

    List<Student> getAllStudents();

    Student addLectureToStudent(long id, long lectureId);

    Student addLecturesToStudent(long studentId,List<Lecture> lectures);
}
