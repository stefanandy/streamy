package com.streamy.streamy.repositorys;

import com.streamy.streamy.models.Rating;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface RatingRepository extends JpaRepository<Rating,Integer> {
    @Query("SELECT c FROM Rating c where c.movie_id=:movie_id")
    public List<Rating> findByMovieId(@Param("movie_id") int movie_id);
}
