package dev.firat.Students_FullStackApp.controller;

import dev.firat.Students_FullStackApp.entity.Lecture;
import dev.firat.Students_FullStackApp.entity.Student;
import dev.firat.Students_FullStackApp.service.abstracts.LectureService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api/lectures")
public class LectureController {
    private final LectureService service;

    @Autowired
    public LectureController(LectureService service) {
        this.service = service;
    }

    @PostMapping("")
    public Lecture postLecture(@RequestBody Lecture lecture){
        return service.saveLecture(lecture);
    }
    @PostMapping("{lectureId}/appendTeacher/{teacherId}")
    public boolean appendTeacherToLecture(@PathVariable long lectureId,@PathVariable long teacherId){
        return service.appendTeacher(lectureId,teacherId);
    }
    @PostMapping("{lectureId}/appendStudent/{studentId}")
    public boolean appendStudentToLecture(@PathVariable long lectureId,@PathVariable long studentId){
        return service.appendStudent(lectureId,studentId);
    }
    @GetMapping("")
    public List<Lecture> getAllLectures(){
        return service.getAllLectures();
    }
    @GetMapping("/{id}")
    public Lecture getLecture(@PathVariable long id){
        return service.getLecture(id);
    }
    @GetMapping("/{id}/students")
    public List<Student> getStudentsByLecture(@PathVariable long id){
        return service.getStudentsByLectureId(id);
    }

    @PutMapping("/{id}")
    public Lecture putLecture(@PathVariable long id,@RequestBody Lecture lecture){
        return service.updateLecture(id,lecture);
    }
    @DeleteMapping("/{id}")
    public Boolean deleteLecture(@PathVariable long id){
        return service.deleteLecture(id);
    }


}
