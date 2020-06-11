package com.streamy.streamy.models;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

@Entity
@Table(name = "movie_cast",schema = "public")
public class MovieCast implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private int id;

    @OneToMany(fetch = FetchType.LAZY)
    @JoinColumn(name = "actor_id")
    private List<Actor> movieActors;


    @Column(name = "movie_id")
    private int movie_id;

    private String role;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public List<Actor> getMovieActors() {
        return movieActors;
    }

    public void setMovieActors(List<Actor> movieActors) {
        this.movieActors = movieActors;
    }

    public int getMovie_id() {
        return movie_id;
    }

    public void setMovie_id(int movie_id) {
        this.movie_id = movie_id;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }
}
