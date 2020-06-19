package com.streamy.streamy.models;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "reviewer",schema = "public")
public class Reviewer implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="rev_id")
    private int rev_id;

    @Column(name = "rev_name")
    public String rev_name;

    public int getRevID() {
        return rev_id;
    }

    public void setRevID(int revID) {
        this.rev_id = revID;
    }

    public String getRevName() {
        return rev_name;
    }

    public void setRevName(String revName) {
        this.rev_name = revName;
    }
}
