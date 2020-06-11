package com.streamy.streamy.repositorys;

import com.streamy.streamy.models.Actor;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ActorRepository extends JpaRepository<Actor,Integer> {
}
