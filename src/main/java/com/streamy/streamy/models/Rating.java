package com.streamy.streamy.models;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name ="rating",schema = "public")
public class Rating implements Serializable {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private int id;


    @OneToMany(fetch = FetchType.LAZY)
    @JoinColumn(name = "rev_id")
    private Set<Reviewer> reviewer =new HashSet<Reviewer>();

    @Column(name = "movie_id")
    private int movie_id;

    @Column(name = "rev_stars")
    private int rev_stars;

    @Column(name="rev_date")
    private Date rev_date;

    public Set<Reviewer> getReviewer() {
        return reviewer;
    }

    public void setReviewer(Set<Reviewer> reviewer) {
        this.reviewer = reviewer;
    }

    public int getMovie() {
        return movie_id;
    }

    public void setMovie(int movie) {
        this.movie_id = movie;
    }

    public int getRevStars() {
        return rev_stars;
    }

    public void setRevStars(int revStars) {
        this.rev_stars = revStars;
    }

    public Date getNumbRatings() {
        return rev_date;
    }

    public void setNumbRatings(Date rev_date) {
        this.rev_date = rev_date;
    }

}
