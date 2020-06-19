package com.streamy.streamy.controllers;

import com.streamy.streamy.models.*;
import com.streamy.streamy.repositorys.*;
import com.streamy.streamy.services.StockedProcedures;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.text.DecimalFormat;
import java.util.List;

@Controller
public class PagesController {

    @Autowired
    UserRepository userRepository;

    @Autowired
    PasswordEncoder passwordEncoder;

    @Autowired
    MoviesRepository moviesRepository;

    @Autowired
    RatingRepository ratingRepository;

    @Autowired
    ReviewerRepository reviewerRepository;

    @Autowired
    MovieCastRepository castRepository;

    @Autowired
    StockedProcedures st;

    @RequestMapping("/index")
    public String index(Model model){
        model.addAttribute("authRequest", new AuthRequest());
        return "index";
    }
    @PostMapping("/register")
    public String indexRegister(@ModelAttribute AuthRequest authRequest) throws Exception {
        User user=new User(authRequest.getEmail(), passwordEncoder.encode(authRequest.getPassword()),"ROLE_ADMIN");
        userRepository.save(user);
        return "index";
    }

    @GetMapping("/addRate")
    public String getSubmitRate(Model model){
        model.addAttribute("ratingSubmit",new ratingSubmit());
        return "addRate";
    }

    @PostMapping("/addRate")
    public String submitRate(@ModelAttribute ratingSubmit submit){
        Reviewer reviewer=new Reviewer();
        reviewer.setRevName(submit.getEmail());
        reviewerRepository.save(reviewer);
        Rating rating=new Rating();
        rating.rev_stars=Integer.parseInt(submit.getNumberStars());
        rating.setMovie(Integer.parseInt(submit.getMovie_id()));
        List<Reviewer> reviewers=reviewerRepository.findByName(submit.getEmail());
        rating.setReviewer(reviewers);
        ratingRepository.save(rating);
        return "addRate";
    }

    @GetMapping("/addMovie")
    public String getAddMovie( Model model){
        model.addAttribute("movie",new Movie());
        return "addMovie";
    }

    @PostMapping("/addMovie")
    public String postAddMovie(@ModelAttribute Movie movie){
        moviesRepository.save(movie);
        return "addMovie";
    }



    @GetMapping("/movies")
    public String getMovies(Model model){
        List<Movie> movies = moviesRepository.findAll();
        model.addAttribute("movies",movies);
        return "movies";
    }

    @GetMapping("/movies/{id}")
    public String getMovieById(@PathVariable("id")int id, Model model){
        Movie movie=moviesRepository.findById(id).get();
        List<Rating> ratings = ratingRepository.findByMovieId(id);
        List<MovieCast> casts=castRepository.findByMovieId(id);
        double sum=0;
        double counter=0;
        for(Rating r:ratings){
            sum+=r.rev_stars;
            counter++;
        }
        DecimalFormat df= new DecimalFormat("####0.00");
        double avgRating=sum/counter;
        model.addAttribute("movie",movie);
        model.addAttribute("ratings",ratings);
        model.addAttribute("avg_rating",df.format(avgRating));
        model.addAttribute("casts",casts);
        model.addAttribute("ratingSubmit", new ratingSubmit());
        return "movie";
    }


}
