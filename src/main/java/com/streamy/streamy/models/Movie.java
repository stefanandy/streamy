package com.streamy.streamy.models;

import javax.persistence.*;
import java.io.Serializable;


@NamedStoredProcedureQueries({
        @NamedStoredProcedureQuery(
                name = Movie.avg_rating,
                procedureName = "avg_rating",
                parameters = {
                        @StoredProcedureParameter(type = Integer.class, mode = ParameterMode.IN),
                        @StoredProcedureParameter(type = Double.class, mode = ParameterMode.INOUT),
                }
        )})

@Entity
@Table(name= "movies",schema = "public")
public class Movie implements Serializable {

    public static final String avg_rating="avg_rating";
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
    private int movieYear;


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

    public int getMovieYear() {
        return movieYear;
    }

    public void setMovieYear(int movieYear) {
        this.movieYear = movieYear;
    }


}
