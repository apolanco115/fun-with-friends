package com.example.springwebsocket.service;

import com.example.springwebsocket.model.GameRoom;
import org.springframework.http.ResponseEntity;

public interface GameRoomService {
     Iterable<GameRoom> listAllGameRooms();

     GameRoom createGameRoom(GameRoom newGameRoom);

     ResponseEntity deleteGameRoomById(Long gameRoomId);

     ResponseEntity joinGameRoom(String roomName);

     void leaveRoom();

     GameRoom getRoomDetails(String roomName);

}
