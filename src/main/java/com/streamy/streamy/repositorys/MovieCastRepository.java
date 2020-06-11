package com.streamy.streamy.repositorys;

import com.streamy.streamy.models.MovieCast;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface MovieCastRepository extends JpaRepository<MovieCast, Integer> {

    @Query("SELECT c FROM MovieCast c where c.movie_id=:movie_id")
    public List<MovieCast> findByMovieId(@Param("movie_id") int movie_id);
}
