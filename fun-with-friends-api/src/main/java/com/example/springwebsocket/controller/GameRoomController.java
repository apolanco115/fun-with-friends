package com.example.springwebsocket.controller;

import com.example.springwebsocket.model.GameRoom;
import com.example.springwebsocket.service.GameRoomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class GameRoomController {

    @Autowired
    GameRoomService gameRoomService;

    @GetMapping("/game-room/listAll")
    public Iterable<GameRoom> listGameRooms(){return gameRoomService.listAllGameRooms();}

    @PostMapping("/game-room/create")
    public GameRoom createGameRoom(@RequestBody GameRoom newGameRoom){
        return gameRoomService.createGameRoom(newGameRoom);
    }

    @PostMapping("/game-room/join-{roomName}")
    public ResponseEntity joinGameRoom(@PathVariable String roomName){
        return gameRoomService.joinGameRoom(roomName);
    }

    @GetMapping("/game-room/{roomName}-details")
    public GameRoom getRoomDetails(@PathVariable String roomName) { return gameRoomService.getRoomDetails(roomName); }

    @PostMapping("/game-room/leave")
    public void leaveGameRoom(){ gameRoomService.leaveRoom(); }

    @DeleteMapping("/game-room/{gameRoomId}")
    public ResponseEntity deleteGameRoomById(@PathVariable Long gameRoomId){

        try {
            return gameRoomService.deleteGameRoomById(gameRoomId);
        } catch (ResourceNotFoundException e) {
            return ResponseEntity.notFound().build();
        }

    }
}
