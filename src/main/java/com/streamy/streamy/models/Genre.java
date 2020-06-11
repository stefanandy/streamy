package com.streamy.streamy.models;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "genres",schema = "public")
public class Genre implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="genre_id")
    private int genreID;


    private String title;


    public int getGenreID() {
        return genreID;
    }

    public void setGenreID(int genreID) {
        this.genreID = genreID;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }
}
