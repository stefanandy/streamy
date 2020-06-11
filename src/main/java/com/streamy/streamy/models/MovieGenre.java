package com.streamy.streamy.models;

import javax.persistence.*;
import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "movie_genres",schema = "public")
public class MovieGenre implements Serializable {

        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        @Column(name="id")
        private int id;


        @OneToMany(fetch = FetchType.LAZY)
        @JoinColumn(name = "genre_id")
        private Set<Genre> genres=new HashSet<Genre>();

        @Column(name = "movie_id")
        private int movie_id;

        public int getId() {
                return id;
        }

        public void setId(int id) {
                this.id = id;
        }

        public Set<Genre> getGenres() {
                return genres;
        }

        public void setGenres(Set<Genre> genres) {
                this.genres = genres;
        }

        public int getMovie_id() {
                return movie_id;
        }

        public void setMovie_id(int movie_id) {
                this.movie_id = movie_id;
        }
}
