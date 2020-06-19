package com.streamy.streamy.repositorys;

import com.streamy.streamy.models.Movie;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.query.Procedure;
import org.springframework.data.repository.query.Param;

public interface MoviesRepository extends JpaRepository<Movie,Integer> {

    @Procedure(name=Movie.avg_rating)
    public double avgRatingById(@Param("movie_id_parameter") int movie_id, @Param("rating")double rating);

    @Query("UPDATE Movie M SET M.name=:new_name  where M.movieID=:movie_id")
    public void updateNameById(@Param("movie_id") int movie_id, @Param("new_name")String new_name);

    @Query("UPDATE Movie M SET M.name=:new_name  where M.name=:old_name")
    public void updateNameByName(@Param("old_name") String old_name, @Param("new_name")String new_name);



}
