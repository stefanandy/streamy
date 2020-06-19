package com.streamy.streamy.services;

import com.streamy.streamy.models.AuthRequest;
import com.streamy.streamy.models.MyUserPrincipal;
import com.streamy.streamy.models.User;
import com.streamy.streamy.repositorys.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class MyUserDetail implements UserDetailsService {
    @Autowired
    private UserRepository repository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        User user = repository.findByEmail(email);
        if (user==null){
            throw new UsernameNotFoundException("User not found");
        }
        MyUserPrincipal userPrincipal = new MyUserPrincipal(user);

        return userPrincipal;
    }

    public User save(AuthRequest authRequest){
        User user = new User(authRequest.getEmail(),passwordEncoder.encode(authRequest.getPassword()),"ROLE_ADMIN");
        return repository.save(user);
    }
}
