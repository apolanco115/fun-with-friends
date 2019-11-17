package com.example.springwebsocket.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import net.minidev.json.annotate.JsonIgnore;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name="game_rooms")
public class GameRoom {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true)
    private String roomName;

    @Column
    private Integer userCount = 0;

    @OneToMany(mappedBy = "currentRoom",
    cascade = CascadeType.ALL)
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    List<User> currentUsers;

    public GameRoom() { };

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getRoomName() {
        return roomName;
    }

    public void setRoomName(String roomName) {
        this.roomName = roomName;
    }

    public Integer getUserCount() {
        return userCount;
    }

    public void setUserCount(Integer userCount) {
        this.userCount = userCount;
    }

    @JsonIgnore
    public List<User> getCurrentUsers() {
        return currentUsers;
    }

    public void setCurrentUsers(List<User> currentUsers) {
        this.currentUsers = currentUsers;
    }

    //adds user to room and increases count
    public void addUsers(User user) {
        if(currentUsers==null){
            currentUsers = new ArrayList<>();
        }
        currentUsers.add(user);
        setUserCount(currentUsers.size());
    }
    //removed=s user from room and decreases count
    public void removeUser(User user) {
        currentUsers.remove(user);
        setUserCount(currentUsers.size());
    }


}
