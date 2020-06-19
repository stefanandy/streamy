package com.streamy.streamy.models;

import java.io.Serializable;

public class ratingSubmit implements Serializable {
    private String email;
    private String numberStars;
    private String movie_id;

    public String getMovie_id() {
        return movie_id;
    }

    public void setMovie_id(String movie_id) {
        this.movie_id = movie_id;
    }



    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getNumberStars() {
        return numberStars;
    }

    public void setNumberStars(String numberStars) {
        this.numberStars = numberStars;
    }

    public ratingSubmit(){}


}
