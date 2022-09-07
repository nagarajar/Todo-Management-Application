package com.todo.app.rest.basic.auth;

import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

@Configuration
@EnableWebSecurity
public class SpringSecurityConfigurationBasicAuth extends WebSecurityConfigurerAdapter
{
	@Override
	protected void configure(HttpSecurity http) throws Exception 
	{
		http
		.csrf().disable() // csrf is like JWT token, but we will use JWT so we are disabling this 
		.authorizeRequests()
		//Allow preflight requests(options request)
		.antMatchers(HttpMethod.OPTIONS,"/**").permitAll()//whatever the request from options allow all
		// remaining you can authenticate
			.anyRequest().authenticated()
			.and()
		//http.formLogin(); //not required
		.httpBasic();
	}
}
