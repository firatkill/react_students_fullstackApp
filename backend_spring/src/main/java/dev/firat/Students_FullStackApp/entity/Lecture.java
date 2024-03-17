package dev.firat.Students_FullStackApp.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.Data;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name="lecture")
public class Lecture {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private int id;

    @Column(name="name")
    private String name;

    @Column(name="classroom")
    private String classroom;

    @Column(name="student_capacity")
    private int studentCapacity;

    @OneToOne(cascade = {CascadeType.DETACH,CascadeType.MERGE,CascadeType.PERSIST,CascadeType.REFRESH})
    @JoinColumn(name = "teacher_id", referencedColumnName = "id")
    @JsonManagedReference
    private Teacher teacher;

    @ManyToMany(cascade = CascadeType.ALL,fetch = FetchType.LAZY)
    @JoinTable(
            name="lecture_student",
            joinColumns =  @JoinColumn(name="lecture_id"),
            inverseJoinColumns = @JoinColumn(name="student_id")
    )
    @JsonBackReference
    private List<Student> students;

    public Lecture() {
    }

    public Lecture(String name, String classroom, int studentCapacity) {
        this.name = name;
        this.classroom = classroom;
        this.studentCapacity = studentCapacity;

    }

    public Lecture(String name, String classroom, int studentCapacity, Teacher teacher) {
        this.name = name;
        this.classroom = classroom;
        this.studentCapacity = studentCapacity;
        this.teacher = teacher;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getClassroom() {
        return classroom;
    }

    public void setClassroom(String classroom) {
        this.classroom = classroom;
    }

    public int getStudentCapacity() {
        return studentCapacity;
    }

    public void setStudentCapacity(int studentCapacity) {
        this.studentCapacity = studentCapacity;
    }

    public List<Student> getStudents() {
        return students;
    }

    public void addStudent(Student student){
        if(this.students==null) this.students=new ArrayList<>();
        this.students.add(student);
    }
    public void setStudents(List<Student> students) {
        this.students = students;
    }

    public Teacher getTeacher() {
        return teacher;
    }

    public void setTeacher(Teacher teacher) {
        this.teacher = teacher;
    }

    @Override
    public String toString() {
        return "Lecture{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", classroom='" + classroom + '\'' +
                ", studentCapacity='" + studentCapacity + '\'' +
                ", students=" + students +
                '}';
    }
}
