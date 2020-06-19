package com.streamy.streamy.repositorys;

import com.streamy.streamy.models.Reviewer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ReviewerRepository extends JpaRepository<Reviewer,Integer> {
    @Query("SELECT r FROM Reviewer r where r.rev_name=:rev_name")
    public List<Reviewer> findByName(@Param("rev_name") String rev_name);
}
