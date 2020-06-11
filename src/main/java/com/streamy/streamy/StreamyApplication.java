package com.streamy.streamy;

import com.streamy.streamy.controllers.UserController;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing
public class StreamyApplication {

	public static void main(String[] args) {
		SpringApplication.run(StreamyApplication.class, args);
	}

}
