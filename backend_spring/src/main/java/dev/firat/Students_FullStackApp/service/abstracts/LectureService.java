package dev.firat.Students_FullStackApp.service.abstracts;

import dev.firat.Students_FullStackApp.entity.Lecture;
import dev.firat.Students_FullStackApp.entity.Student;
import org.springframework.stereotype.Service;

import java.util.List;


public interface LectureService {
    Lecture saveLecture(Lecture lecture);
    Lecture updateLecture(long id,Lecture lecture);
    boolean deleteLecture(long id);
    Lecture getLecture(Long id);

    List<Lecture> getAllLectures();

    boolean appendTeacher(long lectureId, long teacherId);

    List<Lecture> getLecturesByStudentId(long id);

    boolean appendStudent(long lectureId, long studentId);

    List<Student> getStudentsByLectureId(long lectureId);
}
