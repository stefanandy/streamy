package com.streamy.streamy.controllers;

import com.streamy.streamy.models.User;
import com.streamy.streamy.repositorys.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
public class UserController {
    @Autowired
    private UserRepository repository;

       @RequestMapping(value = "/{id}", method= RequestMethod.GET ,produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<User> userById(@PathVariable("id") Integer id){
        User user =repository.findById(id).get();
        return new ResponseEntity<User>(user, HttpStatus.OK);
    }

}
