package com.example.springwebsocket;

import com.example.springwebsocket.model.GameRoom;
import com.example.springwebsocket.model.Message;
import com.example.springwebsocket.model.User;
import com.example.springwebsocket.repository.GameRoomRepository;
import com.example.springwebsocket.repository.UserRepository;
import com.example.springwebsocket.service.GameRoomService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.event.EventListener;
import org.springframework.messaging.simp.SimpMessageSendingOperations;
import org.springframework.messaging.simp.stomp.StompHeaderAccessor;
import org.springframework.stereotype.Component;
import org.springframework.web.socket.messaging.SessionConnectedEvent;
import org.springframework.web.socket.messaging.SessionDisconnectEvent;

@Component
public class WebSocketEventListener {

    private static final Logger logger = LoggerFactory.getLogger(WebSocketEventListener.class);

    @Autowired
    private SimpMessageSendingOperations messagingTemplate;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private GameRoomRepository gameRoomRepository;

    @Autowired
    private GameRoomService gameRoomService;


    @EventListener
    public void handleWebSocketConnectListener(SessionConnectedEvent event) {
        logger.info("Received a new web socket connection.");
    }
    @EventListener
    public void handleWebSocketDisconnectListener(SessionDisconnectEvent event) {
        StompHeaderAccessor headerAccessor = StompHeaderAccessor.wrap(event.getMessage());

        String username = (String) headerAccessor.getSessionAttributes().get("username");
        String roomId = (String) headerAccessor.getSessionAttributes().get("room_id");
        if (username != null) {
            logger.info("User Disconnected: " + username);

            Message chatMessage = new Message();
            chatMessage.setType(Message.MessageType.LEAVE);
            chatMessage.setSender(username);

            messagingTemplate.convertAndSend(String.format("/topic/%s", roomId), chatMessage);

            User user = userRepository.findByUsername(username);
            user.setCurrentRoom(null);

            GameRoom gameRoom = gameRoomRepository.findByRoomName(roomId);

            if(gameRoom.getUserCount()==0){
                gameRoomService.deleteGameRoomById(gameRoom.getId());
            }

        }
    }
}