package com.crudapplication.crud.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.crudapplication.crud.model.User;
import com.crudapplication.crud.services.UserService;


//controller apki route/api ko handle karta hai ki kaunsi route pe kaunsi endpoint pe kaunsi api ko call karna hai 
@RestController //use: act like a controller, handle it like a route
@CrossOrigin //allows all api's course
public class UserController {
	
	@Autowired
	private UserService userService; //create object userservice
	
	@PostMapping("/user")
	public User addUser(@RequestBody User user) {
		return this.userService.addUser(user);
	}
	
	@GetMapping("/users")
	public List<User> getUsers() {
		return this.userService.getUsers();
	}
	
	@GetMapping("/users/{userId}")
	public User getUser(@PathVariable String userId) {
		return this.userService.getUser(Long.parseLong(userId));	
	}
	
	@PutMapping("/user") //if we are making edit api, we can make it by putmapping
	public User updateUser(@RequestBody User user) {
		return this.userService.updateUser(user);
	}
	
	@DeleteMapping("/user/{userId}")
	public User deleteUser(@PathVariable String userId) {
		return this.userService.deleteUser(Long.parseLong(userId));
	}
}
