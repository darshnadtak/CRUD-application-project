//creating dao file for database implementation
package com.crudapplication.crud.doa;

import org.springframework.data.jpa.repository.JpaRepository;

import com.crudapplication.crud.model.User;

public interface UserDao extends JpaRepository<User, Long> {
	

}
