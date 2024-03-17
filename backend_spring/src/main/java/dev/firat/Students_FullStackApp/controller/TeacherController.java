package dev.firat.Students_FullStackApp.controller;

import dev.firat.Students_FullStackApp.entity.Lecture;
import dev.firat.Students_FullStackApp.entity.Student;
import dev.firat.Students_FullStackApp.entity.Teacher;
import dev.firat.Students_FullStackApp.service.abstracts.LectureService;
import dev.firat.Students_FullStackApp.service.abstracts.TeacherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api/teachers")
public class TeacherController
{
    private final TeacherService service;

    @Autowired
    public TeacherController(TeacherService service) {
        this.service = service;
    }

    @PostMapping("")
    public Teacher postTeacher(@RequestBody Teacher teacher){
        return service.saveTeacher(teacher);
    }
    @GetMapping("")
    public List<Teacher> getAllTeachers(){
        return service.getAllTeachers();
    }
    @GetMapping("/{id}")
    public Teacher getTeacher(@PathVariable long id){
        return service.getTeacher(id);
    }
    @PutMapping("/{id}")
    public Teacher putTeacher(@PathVariable long id,@RequestBody Teacher teacher){
        return service.updateTeacher(id,teacher);
    }
    @DeleteMapping("/{id}")
    public Boolean deleteTeacher(@PathVariable long id){
        return service.deleteTeacher(id);
    }
    @PostMapping("{teacherId}/appendLecture/{lectureId}")
    public Boolean appendLectureToTeacher(@PathVariable long teacherId,@PathVariable long lectureId){
        return service.appendLecture(teacherId,lectureId);
    }

}
