package com.streamy.streamy.controllers;

import com.streamy.streamy.models.AuthRequest;
import com.streamy.streamy.models.User;
import com.streamy.streamy.repositorys.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class PagesController {

    @Autowired
    UserRepository userRepository;

    @Autowired
    PasswordEncoder passwordEncoder;

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
}
