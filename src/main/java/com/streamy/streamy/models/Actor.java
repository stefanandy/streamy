package com.streamy.streamy.models;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name="actor",schema = "public")
public class Actor implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="actor_id")
    private int actorId;


    private String firstName;
    private String lastName;


    public int getActorId() {
        return actorId;
    }

    public void setActorId(int actorId) {
        this.actorId = actorId;
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

}
