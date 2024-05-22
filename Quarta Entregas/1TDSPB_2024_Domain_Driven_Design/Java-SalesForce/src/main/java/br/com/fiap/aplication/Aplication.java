package br.com.fiap.aplication;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan("br.com.fiap")
public class Aplication {
	
  public static void main(String[] args) {
	
	  
	  SpringApplication.run(Aplication.class, args);
	  
}
  
}
