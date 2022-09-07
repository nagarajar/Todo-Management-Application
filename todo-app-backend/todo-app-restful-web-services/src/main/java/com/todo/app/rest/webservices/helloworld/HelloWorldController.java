package com.todo.app.rest.webservices.helloworld;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class HelloWorldController 
{
	@GetMapping("/hello-world")
	public String helloWorld()
	{
		return "Hello World";
	}
	
	@GetMapping("/hello-world-bean")
	public HelloWorldBean helloWorldBean()
	{
		//throw new RuntimeException("Some Error Has Happened ! Contact Support at ***-***");
		return new HelloWorldBean("Hello World - changed");
	}
	
	@GetMapping("/hello-world/pathvariable/{name}")
	public HelloWorldBean helloWorldPathVariable(@PathVariable String name)
	{
		return new HelloWorldBean(String.format("Hello World, %s", name));
	}
}

