package com.electricityBill;

import jdk.internal.ref.CleanerImpl;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SpringBootBackendApplication {

	public static void main(String[] args) {
		CleanerImpl SpringApplication;
		SpringApplication.run(SpringBootBackendApplication.class, args);
	}

}
