package com.example.springwebsocket.controller;

import com.example.springwebsocket.config.IAuthentication;
import com.example.springwebsocket.config.JwtResponse;
import com.example.springwebsocket.model.User;
import com.example.springwebsocket.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

@RestController
public class UserController {
    @Autowired
    UserService userService;

    @Autowired
    private IAuthentication authImpl;


    @GetMapping("/hello")
    public String helloWorld(){ return "Hello World!"; }

    @GetMapping("/user")
    @ResponseBody
    public User getCurrentUsername(){
        Authentication auth = authImpl.getAuthentication();
        return userService.getUser(auth.getName());

    }

    @GetMapping("/user/list")
    public Iterable<User> listUsers(){ return userService.listUsers(); }

    @PostMapping("/signup")
    public ResponseEntity<?> createUser(@RequestBody User newUser){
        return ResponseEntity.ok(new JwtResponse(userService.createUser(newUser)));
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody User user) {
        return ResponseEntity.ok(new JwtResponse(userService.login(user)));
    }

}
