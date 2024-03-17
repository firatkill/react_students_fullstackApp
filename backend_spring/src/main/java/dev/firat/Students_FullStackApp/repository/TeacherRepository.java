package dev.firat.Students_FullStackApp.repository;

import dev.firat.Students_FullStackApp.entity.Teacher;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TeacherRepository extends JpaRepository<Teacher,Long> {
}
