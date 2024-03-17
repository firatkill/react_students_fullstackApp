package dev.firat.Students_FullStackApp.service.concretes;

import dev.firat.Students_FullStackApp.entity.Lecture;

import dev.firat.Students_FullStackApp.entity.Student;
import dev.firat.Students_FullStackApp.entity.Teacher;
import dev.firat.Students_FullStackApp.repository.LectureRepository;
import dev.firat.Students_FullStackApp.repository.StudentRepository;
import dev.firat.Students_FullStackApp.repository.TeacherRepository;
import dev.firat.Students_FullStackApp.service.abstracts.LectureService;
import dev.firat.Students_FullStackApp.throwables.InvalidDataException;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.swing.text.html.Option;
import java.util.List;
import java.util.Optional;
import java.util.concurrent.atomic.AtomicReference;

@Service
public class LectureServiceImpl implements LectureService {
    private final LectureRepository repository;
    private final TeacherRepository teacherRepository;

    private final StudentRepository studentRepository;

    @Autowired
    public LectureServiceImpl(LectureRepository repository, TeacherRepository teacherRepository, StudentRepository studentRepository) {
        this.repository = repository;
        this.teacherRepository=teacherRepository;
        this.studentRepository = studentRepository;
    }

    @Override
    @Transactional
    public Lecture saveLecture(Lecture lecture) {
        return repository.save(lecture);
    }

    @Override
    @Transactional
    public Lecture updateLecture(long id, Lecture lecture) {
        Optional<Lecture> optLecture=repository.findById(id);
        if(optLecture.isPresent()){
            Lecture lectureToUpdate=optLecture.get();
            lectureToUpdate.setClassroom(lecture.getClassroom());
            lectureToUpdate.setName(lecture.getName());
            lectureToUpdate.setStudents(lecture.getStudents());
            lectureToUpdate.setTeacher(lecture.getTeacher());
            lectureToUpdate.setStudentCapacity(lecture.getStudentCapacity());
            return repository.save(lectureToUpdate);

        }else{
            throw new InvalidDataException("No such lecture found in database.");
        }

    }

    @Override
    @Transactional
    //delete student's lecture, delete teacher's lecture, then delete lecture itself
    public boolean deleteLecture(long id) {
        Optional<Lecture> optLecture= repository.findById(id);
        if(optLecture.isPresent()){
            Lecture lectureToUpdate=optLecture.get();
            lectureToUpdate.setTeacher(null);
            lectureToUpdate.setStudents(null);
            Lecture updatedLecture=repository.save(lectureToUpdate);
            repository.delete(updatedLecture);
            return true;

        }else{
            throw new InvalidDataException("No Such Lecture Found in db.");
        }
    }


    @Override
    public Lecture getLecture(Long id) {
        Optional<Lecture> optLecture=repository.findById(id);
        if(optLecture.isPresent()) return optLecture.get();
        throw new InvalidDataException("No such lecture found in database.");
    }

    @Override
    public List<Lecture> getAllLectures() {
        return repository.findAll();
    }

    @Override
    @Transactional
    public boolean appendTeacher(long lectureId, long teacherId) {
        var optTeacher= teacherRepository.findById(teacherId);
        var optLecture=repository.findById(lectureId);
        if(optTeacher.isPresent()&&optLecture.isPresent()){
            Lecture lectureToUpdate=optLecture.get();
            lectureToUpdate.setTeacher(optTeacher.get());
            repository.save(lectureToUpdate);
            return true;
        }
        throw new InvalidDataException("No Valid resources.");
    }

    @Override
    public List<Lecture> getLecturesByStudentId(long id) {
        Optional<Student> optStudent=studentRepository.findById(id);
        if(optStudent.isPresent()){
            return optStudent.get().getLectures();
        }
        throw new InvalidDataException("No such student found in database.");
    }

    @Override
    @Transactional
    public boolean appendStudent(long lectureId, long studentId) {
        Optional<Lecture> optLecture=repository.findById(lectureId);
        Optional<Student> optStudent=studentRepository.findById(studentId);
        if(optLecture.isPresent() && optStudent.isPresent()){
            Lecture lectureToUpdate=optLecture.get();
            lectureToUpdate.addStudent(optStudent.get());
            repository.save(lectureToUpdate);
            return true;
        }
        throw new InvalidDataException("No valid resources.");
    }

    @Override
    public List<Student> getStudentsByLectureId(long lectureId) {
        return repository.findById(lectureId).get().getStudents();
    }


}
