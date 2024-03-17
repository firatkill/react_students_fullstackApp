package dev.firat.Students_FullStackApp.service.concretes;

import dev.firat.Students_FullStackApp.entity.Lecture;
import dev.firat.Students_FullStackApp.entity.Student;
import dev.firat.Students_FullStackApp.entity.Teacher;
import dev.firat.Students_FullStackApp.repository.LectureRepository;
import dev.firat.Students_FullStackApp.repository.StudentRepository;

import dev.firat.Students_FullStackApp.service.abstracts.StudentService;
import dev.firat.Students_FullStackApp.throwables.InvalidDataException;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class StudentServiceImpl implements StudentService {
    private final StudentRepository repository;
    private final LectureRepository lectureRepository;

    @Autowired
    public StudentServiceImpl(StudentRepository repository,LectureRepository lectureRepository) {
        this.repository = repository;
        this.lectureRepository=lectureRepository;
    }


    @Override
    @Transactional
    public Student saveStudent(Student student) {
        return repository.save(student);
    }



    public Student updateStudent(long id, Student newStudent) {
     Optional<Student> optStudent=repository.findById(id);
     if(optStudent.isPresent()){
         Student studentToUpdate=optStudent.get();
         studentToUpdate.setStudentNumber(newStudent.getStudentNumber());
         studentToUpdate.setEmail(newStudent.getEmail());
         studentToUpdate.setFirstName(newStudent.getFirstName());

         studentToUpdate.setLastName(newStudent.getLastName());
         return repository.save(studentToUpdate);

     }else{
         throw new InvalidDataException("No such student found in database.");
     }

    }

    @Override
    public Boolean deleteStudent(long id) {
        Optional<Student> optStudent=repository.findById(id);
        if(optStudent.isPresent()){
            Student studentToDelete=optStudent.get();
            studentToDelete.setLectures(null);
            repository.save(studentToDelete);

            repository.delete(studentToDelete);
            return true;
        }else{
            throw new InvalidDataException("No such student found in database.");
        }
    }

    @Override
    public Student getStudent(Long id) {
        Optional<Student> student=repository.findById(id);
        if(student.isPresent()){
            return student.get();
        }else{
            throw new InvalidDataException("No such student found in database.");
        }
    }

    @Override
    public List<Student> getAllStudents() {
        return repository.findAll();
    }

    @Override
    @Transactional
    public Student addLectureToStudent(long id, long lectureId) {
        Optional<Student> optStudent=repository.findById(id);
        Optional<Lecture> optLecture=lectureRepository.findById(lectureId);
        if(optStudent.isPresent() && optLecture.isPresent() ){
            Student studentToUpdate=optStudent.get();
            studentToUpdate.addLecture(optLecture.get());
         return  repository.save(studentToUpdate);
        }
        throw new InvalidDataException("Invalid Resources.");
    }

    public Student addLecturesToStudent(long studentId,List<Lecture> lectures){
        Optional<Student> optStudent=repository.findById(studentId);
 if(optStudent.isPresent()){
     Student studentToUpdate=optStudent.get();
     studentToUpdate.setLectures(lectures);

     repository.save(studentToUpdate);

return optStudent.get();
 }
 throw new InvalidDataException("Student is not present.");

    }
}
