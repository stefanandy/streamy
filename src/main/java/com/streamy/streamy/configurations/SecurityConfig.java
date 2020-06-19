package com.streamy.streamy.configurations;

import com.streamy.streamy.filters.JwtRequestFilter;
import com.streamy.streamy.services.MyUserDetail;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {
    @Autowired
    private MyUserDetail userDetail;

    @Autowired
    private JwtRequestFilter jwtRequestFilter;

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(userDetail);
    }

    @Override
    protected  void configure(HttpSecurity http)throws Exception{
       http.authorizeRequests().antMatchers("/auth").permitAll()
               .antMatchers("/register").permitAll()
               .antMatchers("/index").permitAll()
               .anyRequest().authenticated().and()
               .formLogin().permitAll();

    }

    @Bean
    public DaoAuthenticationProvider authenticationProvider() {
        DaoAuthenticationProvider auth = new DaoAuthenticationProvider();
        auth.setUserDetailsService(userDetail);
        auth.setPasswordEncoder(passwordEncoder());
        return auth;
    }


    @Bean
    PasswordEncoder passwordEncoder(){return new BCryptPasswordEncoder();}

}
