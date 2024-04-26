//here user will save in database
package com.crudapplication.crud.services;

import java.util.List;

import com.crudapplication.crud.model.User;

public interface UserService {
	
	//abstract function is used in interface means we can declare the function no need to define
	//adduser is function
	//return type me voh user ka ek object return karega
	public User addUser(User user); //method
	
	public List<User> getUsers(); //method
	
	public User getUser(long userId); //method
	
	public User updateUser(User user); //method
	
	public User deleteUser(long userId); //method
	
}
