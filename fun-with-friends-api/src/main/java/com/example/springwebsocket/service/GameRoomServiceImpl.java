package com.example.springwebsocket.service;

import com.example.springwebsocket.config.IAuthentication;
import com.example.springwebsocket.model.GameRoom;
import com.example.springwebsocket.model.User;
import com.example.springwebsocket.repository.GameRoomRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

import javax.sound.midi.Soundbank;
import javax.transaction.Transactional;

@Service
public class GameRoomServiceImpl implements GameRoomService {

    @Autowired
    private GameRoomRepository gameRoomRepository;

    @Autowired
    private IAuthentication authImpl;

    @Autowired
    private UserService userService;

    @Override
    public Iterable<GameRoom> listAllGameRooms(){
        return gameRoomRepository.findAll();
    }

    @Override
    public GameRoom createGameRoom(GameRoom newGamRoom){
        Authentication auth = authImpl.getAuthentication();
        User user = userService.getUser(auth.getName());
        return gameRoomRepository.save(newGamRoom);
    }
    //adds user to game room; prevents more than two users per room
    @Override
    public ResponseEntity joinGameRoom(String roomName) {
        GameRoom gameRoom = gameRoomRepository.findByRoomName(roomName);
        System.out.println(gameRoom.getRoomName());
        if(gameRoom.getUserCount()>=2){
            return new ResponseEntity(HttpStatus.NOT_ACCEPTABLE);
        }else{
            Authentication auth = authImpl.getAuthentication();
            User user = userService.getUser(auth.getName());
            user.setCurrentRoom(gameRoom);
            gameRoom.addUsers(user);
            gameRoomRepository.save(gameRoom);
        }
        return new ResponseEntity(HttpStatus.OK);
    }

    @Override
    public GameRoom getRoomDetails(String roomName){
        return gameRoomRepository.findByRoomName(roomName);
    }

    //removes user from room; deletes game room entirely if no users in room.
    @Override
    public void leaveRoom(){
        Authentication auth = authImpl.getAuthentication();
        User user = userService.getUser(auth.getName());
        GameRoom gameRoom = user.getCurrentRoom();
        gameRoom.removeUser(user);
        user.setCurrentRoom(null);
        gameRoomRepository.save(gameRoom);
        if(gameRoom.getUserCount()==0) {
            gameRoomRepository.deleteById(gameRoom.getId());
        }
    }

    @Override
    public ResponseEntity deleteGameRoomById(Long gameRoomId){
        GameRoom gameRoom = gameRoomRepository.findById(gameRoomId).get();

        if(gameRoom.getUserCount()==0) {
            gameRoomRepository.deleteById(gameRoomId);

        }else {
            return new ResponseEntity(HttpStatus.NOT_ACCEPTABLE);
        }
        return new ResponseEntity(HttpStatus.OK);
    }
}
