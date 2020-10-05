package com.geekbrains.geek.market;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Profile;

@SpringBootApplication
public class GeekMarketApplication {
	// Домашнее задание:
	// 1. Попробовать сделать фильтраиця и пагинацию для REST

	public static void main(String[] args) {
		SpringApplication.run(GeekMarketApplication.class, args);
	}
}
