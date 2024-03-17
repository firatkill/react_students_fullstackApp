package dev.firat.Students_FullStackApp.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.LogoutConfigurer;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class WebSecurityConfig  {

    @Bean
    public UserDetailsService userDetailsService() {
        UserDetails user =
                User.builder()
                        .username("user")
                        .password("{noop}password")
                        .roles("USER")
                        .build();

        return new InMemoryUserDetailsManager(user);
    }
    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {

        http.csrf().disable()
                .authorizeHttpRequests(configurer->
                        configurer.requestMatchers("/**").permitAll()
                       // configurer.requestMatchers("/**").hasRole("USER")
                      //        .anyRequest().authenticated()
                )
                .formLogin((form) -> form

                        .defaultSuccessUrl("/api/students")
                        .permitAll()

                )
                .logout(LogoutConfigurer::permitAll);

        return http.build();
    }


}
