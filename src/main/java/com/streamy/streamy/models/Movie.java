package com.streamy.streamy.models;

import javax.persistence.*;
import java.io.Serializable;
@Entity
@Table(name= "movies",schema = "public")
public class Movie implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="movie_id")
    private int movieID;

    public Movie() {
    }

    @Column(name = "name")
    private String name;
    @Column(name = "description")
    private String description;
    @Column(name = "path")
    private String path;
    @Column(name = "thumbnail")
    private String thumbnail;
    @Column(name = "movie_lang")
    private String movieLanguage;
    @Column(name = "movie_year")
    private String movieYear;


    public int getMovieID() {
        return movieID;
    }

    public void setMovieID(int movieID) {
        this.movieID = movieID;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getPath() {
        return path;
    }

    public void setPath(String path) {
        this.path = path;
    }

    public String getThumbnail() {
        return thumbnail;
    }

    public void setThumbnail(String thumbnail) {
        this.thumbnail = thumbnail;
    }

    public String getMovieLanguage() {
        return movieLanguage;
    }

    public void setMovieLanguage(String movieLanguage) {
        this.movieLanguage = movieLanguage;
    }

    public String getMovieYear() {
        return movieYear;
    }

    public void setMovieYear(String movieYear) {
        this.movieYear = movieYear;
    }


}
