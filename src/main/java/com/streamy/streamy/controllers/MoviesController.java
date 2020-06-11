package com.streamy.streamy.controllers;


import com.streamy.streamy.models.Movie;
import com.streamy.streamy.models.MovieCast;
import com.streamy.streamy.models.MovieGenre;
import com.streamy.streamy.models.Rating;
import com.streamy.streamy.repositorys.MovieCastRepository;
import com.streamy.streamy.repositorys.MovieGenresRepository;
import com.streamy.streamy.repositorys.MoviesRepository;
import com.streamy.streamy.repositorys.RatingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/movies")
public class MoviesController {

    @Autowired
    private MoviesRepository moviesRepository;

    @Autowired
    private MovieCastRepository castRepository;

    @Autowired
    private MovieGenresRepository genresRepository;

    @Autowired
    private RatingRepository ratingRepository;

    @RequestMapping(method= RequestMethod.GET ,produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<Movie>> GetAll(){
        List<Movie> movies = moviesRepository.findAll();
        return new ResponseEntity<List<Movie>>(movies, HttpStatus.OK);
    }

    @RequestMapping(value = "{id}",method= RequestMethod.GET ,produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Movie> GetById(@PathVariable("id") Integer id){
        Movie movie = moviesRepository.findById(id).get();
        return new ResponseEntity<Movie>(movie, HttpStatus.OK);
    }

    @RequestMapping(value = "{id}",method= RequestMethod.PUT ,produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> UpdateName(@PathVariable("id") Integer id, @RequestBody String name){
        moviesRepository.updateNameById(id,name);
        Movie movie = moviesRepository.findById(id).get();
        return new ResponseEntity<Movie>(movie,HttpStatus.CREATED);
    }

    @RequestMapping(value = "{id}/cast",method= RequestMethod.GET ,produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<MovieCast>> GetCastById(@PathVariable("id") Integer id){
        List<MovieCast> cast=castRepository.findByMovieId(id);
        return new ResponseEntity<List<MovieCast>>(cast, HttpStatus.OK);
    }

    @RequestMapping(value = "{id}/genre",method= RequestMethod.GET ,produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<MovieGenre> > GetGenreById(@PathVariable("id") Integer id){
        List<MovieGenre> genres=genresRepository.findByMovieId(id);
        return new ResponseEntity<List<MovieGenre> >(genres, HttpStatus.OK);
    }

    @RequestMapping(value = "{id}/rating",method= RequestMethod.GET ,produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<Rating>> GetRatingById(@PathVariable("id") Integer id){
        List<Rating> ratings=ratingRepository.findByMovieId(id);
        return new ResponseEntity<List<Rating>>(ratings, HttpStatus.OK);
    }





}
