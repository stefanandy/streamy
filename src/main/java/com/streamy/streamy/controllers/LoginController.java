package com.streamy.streamy.controllers;

import com.streamy.streamy.models.AuthRequest;
import com.streamy.streamy.models.User;
import com.streamy.streamy.repositorys.UserRepository;
import com.streamy.streamy.services.JwtUtil;
import com.streamy.streamy.services.MyUserDetail;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LoginController {

    @Autowired
    private UserRepository repository;

  //  @Autowired
    //private AuthenticationManager authManager;

    @Autowired
    private JwtUtil jwtTokenUtil;

    @Autowired
    private MyUserDetail userDetailService;

    @Autowired
    private PasswordEncoder passwordEncoder;

   /* @RequestMapping(value = "/api/auth", method= RequestMethod.POST ,produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> createAuthToken(@RequestBody AuthRequest request)throws Exception {
        try{
            authManager.authenticate(
                    new UsernamePasswordAuthenticationToken(request.getEmail(),request.getPassword())
            );
        }catch (BadCredentialsException e){
            throw new Exception("Incorect email or password");
        }
        final UserDetails userDetail = userDetailService.loadUserByUsername(request.getEmail());

        final String jwt = jwtTokenUtil.generateToken(userDetail);

        return ResponseEntity.ok(new AuthResponse(jwt));
    }*/

    @RequestMapping(value = "/api/register", method= RequestMethod.POST ,produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity registerAuth(@RequestBody AuthRequest request)throws Exception {
        User user=new User(request.getEmail(), passwordEncoder.encode(request.getPassword()),"ROLE_ADMIN");
        repository.save(user);
        return ResponseEntity.ok(user);
    }

}
