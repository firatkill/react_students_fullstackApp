package dev.firat.Students_FullStackApp.controller;

import dev.firat.Students_FullStackApp.entity.Lecture;
import dev.firat.Students_FullStackApp.entity.Student;
import dev.firat.Students_FullStackApp.service.abstracts.LectureService;
import dev.firat.Students_FullStackApp.service.abstracts.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api/students")
public class StudentController {
    private final StudentService studentService;
    private final LectureService lectureService;

    @Autowired
    public StudentController(StudentService studentService, LectureService lectureService) {
        this.studentService = studentService;
        this.lectureService = lectureService;
    }

    @PostMapping("")
    public Student postStudent(@RequestBody Student student){
        return studentService.saveStudent(student);
    }
    @PostMapping("/{studentId}/addLecture/{lectureId}")
    public Student postStudentLecture(@PathVariable long studentId,@PathVariable long lectureId){
        return studentService.addLectureToStudent(studentId,lectureId);
    }
    @PostMapping("/{studentId}/addLectures")
    public Student addLecturesToStudent(@PathVariable long studentId,@RequestBody List<Lecture> lectures){
        return studentService.addLecturesToStudent(studentId,lectures);
    }

    @GetMapping("")
    public List<Student> getStudents(){
        return studentService.getAllStudents();
    }
    @GetMapping("/{id}")
    public Student getOneStudent(@PathVariable long id){
        return studentService.getStudent(id);
    }
    @GetMapping("/{id}/lectures")
    public List<Lecture> getLecturesByStudent(@PathVariable long id){
        return lectureService.getLecturesByStudentId(id);
    }
    @PutMapping("/{id}")
    public Student putStudent(@PathVariable long id,@RequestBody Student student){
        return studentService.updateStudent(id,student);
    }
    @DeleteMapping("/{id}")
    public Boolean deleteStudent(@PathVariable long id){
        return studentService.deleteStudent(id);
    }

}
