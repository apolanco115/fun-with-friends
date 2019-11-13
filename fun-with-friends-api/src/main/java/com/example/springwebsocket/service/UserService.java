package com.example.springwebsocket.service;

import com.example.springwebsocket.model.User;
import org.springframework.security.core.userdetails.UserDetailsService;

public interface UserService extends UserDetailsService {

     Iterable<User> listUsers();

     User getUser(String username);

     String createUser(User newUser);

     String login(User user);


}
