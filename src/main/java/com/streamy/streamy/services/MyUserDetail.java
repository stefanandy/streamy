package com.streamy.streamy.services;

import com.streamy.streamy.models.MyUserPrincipal;
import com.streamy.streamy.models.User;
import com.streamy.streamy.repositorys.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class MyUserDetail implements UserDetailsService {
    @Autowired
    private UserRepository repository;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        User user = repository.findByEmail(email);
        if (user==null){
            throw new UsernameNotFoundException("User not found");
        }
        MyUserPrincipal userPrincipal = new MyUserPrincipal(user);

        return userPrincipal;
    }
}
