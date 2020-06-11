package com.streamy.streamy.models;
import javax.persistence.*;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name= "users",schema = "public")
public class User implements Serializable {
    @Column(name="first_name")
    private String firstName;

    private String lastName;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="user_id")
    private int userID;

    @Column(name = "password")
    private String password;

    private String email;

    public User(String email, String password, String role_user) {
        this.email=email;
        this.password=password;
        this.role=role_user;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public int getUserID() {
        return userID;
    }

    public void setUserID(int userID) {
        this.userID = userID;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    private String role;

    public User(){}

    public User(String firstName, String lastName, int userID, String password, String email, String role) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.userID = userID;
        this.password = password;
        this.email = email;
        this.role = role;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public List<String>getRoleList(){
        ArrayList<String> roles=new ArrayList<String>();
        roles.add(this.role);
        return roles;
    }

}
