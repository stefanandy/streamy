package com.streamy.streamy.repositorys;

import com.streamy.streamy.models.MovieGenre;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface MovieGenresRepository extends JpaRepository<MovieGenre,Integer> {
    @Query("SELECT c FROM MovieGenre c where c.movie_id=:movie_id")
    public List<MovieGenre> findByMovieId(@Param("movie_id") int movie_id);
}
