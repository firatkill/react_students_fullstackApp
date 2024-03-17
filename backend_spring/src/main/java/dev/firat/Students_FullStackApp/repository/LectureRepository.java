package dev.firat.Students_FullStackApp.repository;

import dev.firat.Students_FullStackApp.entity.Lecture;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LectureRepository extends JpaRepository<Lecture,Long> {
}
