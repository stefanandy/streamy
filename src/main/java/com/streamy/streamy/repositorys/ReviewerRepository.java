package com.streamy.streamy.repositorys;

import com.streamy.streamy.models.Reviewer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReviewerRepository extends JpaRepository<Reviewer,Integer> {
}
