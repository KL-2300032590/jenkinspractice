package com.art;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

@SpringBootApplication
public class OnlineArtApplication extends SpringBootServletInitializer{

	public static void main(String[] args) {
		SpringApplication.run(OnlineArtApplication.class, args);
		System.out.println("Project is RunningSuccessfully..");
		
	}

}
