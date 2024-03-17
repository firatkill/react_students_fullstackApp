package dev.firat.Students_FullStackApp.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;


@Entity
@Table(name="student")
public class Student {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private long id;
    @Column(name="student_number")
    private long studentNumber;
    @Column(name="first_name")
    private String firstName;

    @Column(name="last_name")
    private String lastName;
    @Column(name="email")
    private String email;
    @ManyToMany(cascade = CascadeType.ALL,fetch = FetchType.LAZY)
    @JoinTable(
            name="lecture_student",
            joinColumns = @JoinColumn(name="student_id"),
            inverseJoinColumns = @JoinColumn(name="lecture_id")
    )
    @JsonBackReference
    private List<Lecture> lectures;

    public Student() {

    }
    public Student(long studentNumber, String firstName, String lastName,String email) {
        this.studentNumber = studentNumber;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email=email;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public long getStudentNumber() {
        return studentNumber;
    }

    public void setStudentNumber(long studentNumber) {
        this.studentNumber = studentNumber;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public List<Lecture> getLectures() {
        return lectures;
    }

    public void addLecture(Lecture lecture){
        if(this.lectures==null) this.lectures=new ArrayList<>();

        this.lectures.add(lecture);
    }
    public void setLectures(List<Lecture> lectures) {
        this.lectures = lectures;
    }

    @Override
    public String toString() {
        return "Student{" +
                "id=" + id +
                ", studentNumber=" + studentNumber +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", email='" + email + '\'' +
                ", lectures=" + lectures +
                '}';
    }
}
