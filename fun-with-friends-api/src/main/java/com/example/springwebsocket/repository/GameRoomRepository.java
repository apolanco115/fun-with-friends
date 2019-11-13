package com.example.springwebsocket.repository;

import com.example.springwebsocket.model.GameRoom;
import org.springframework.data.repository.CrudRepository;

public interface GameRoomRepository extends CrudRepository<GameRoom, Long> {

     GameRoom findByRoomName(String roomName);

}
