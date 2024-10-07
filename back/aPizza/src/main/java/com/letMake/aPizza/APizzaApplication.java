package com.letMake.aPizza;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@EnableJpaRepositories
@SpringBootApplication
public class APizzaApplication {

	public static void main(String[] args) {

		SpringApplication.run(APizzaApplication.class, args);
	}

}
