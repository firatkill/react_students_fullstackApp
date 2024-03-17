package dev.firat.Students_FullStackApp.service.concretes;

import dev.firat.Students_FullStackApp.entity.Lecture;
import dev.firat.Students_FullStackApp.entity.Student;
import dev.firat.Students_FullStackApp.entity.Teacher;
import dev.firat.Students_FullStackApp.repository.LectureRepository;
import dev.firat.Students_FullStackApp.repository.TeacherRepository;
import dev.firat.Students_FullStackApp.service.abstracts.TeacherService;
import dev.firat.Students_FullStackApp.throwables.InvalidDataException;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TeacherServiceImpl implements TeacherService {
    private final  TeacherRepository repository;
    private final LectureRepository lectureRepository;

    @Autowired
    public TeacherServiceImpl(TeacherRepository repository,LectureRepository lectureRepository) {
        this.repository = repository;
        this.lectureRepository=lectureRepository;
    }

    @Override
    @Transactional
    public Teacher saveTeacher(Teacher teacher) {
        return repository.save(teacher);
    }

    @Override
    @Transactional
    public Teacher updateTeacher(long id, Teacher newTeacher) {
        Optional<Teacher> optionalTeacher=repository.findById(id);
    if(optionalTeacher.isPresent()){
        Teacher teacherToUpdate=optionalTeacher.get();
        teacherToUpdate.setEmail(newTeacher.getEmail());
        teacherToUpdate.setFirstName(newTeacher.getFirstName());
        teacherToUpdate.setLastName(newTeacher.getLastName());
        return repository.save(teacherToUpdate);
    }
     throw new InvalidDataException("No Such Teacher found in database.");

    }

    @Override
    @Transactional
    public Boolean deleteTeacher(long id) {

        if(repository.findById(id).isPresent()){
            repository.deleteById(id);
            return true;
        }else{
            throw new InvalidDataException("No Such Teacher found in database.");

        }
    }

    @Override
    public Teacher getTeacher(Long id) {
        Optional<Teacher> teacher=repository.findById(id);
        if(teacher.isPresent()){
            return teacher.get();
        }else{
            throw new InvalidDataException("No Such Teacher found in database.");
        }
    }

    @Override
    public List<Teacher> getAllTeachers() {
        return repository.findAll();
    }

    @Override
    public Boolean appendLecture(long teacherId, long lectureId) {
        Optional<Teacher> optTeacher= repository.findById(teacherId);
        Optional<Lecture> optLecture=lectureRepository.findById(lectureId);
        if(optTeacher.isPresent()&&optLecture.isPresent()){
            Lecture lectureToUpdate=optLecture.get();
            lectureToUpdate.setTeacher(optTeacher.get());
            lectureRepository.save(lectureToUpdate);
            return true;
        }
        throw new InvalidDataException("No Valid resources.");

    }


}
