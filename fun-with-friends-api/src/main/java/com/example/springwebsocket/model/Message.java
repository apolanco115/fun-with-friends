package com.example.springwebsocket.model;

public class Message {
    //string storing data to be used in massage
    private String content;
    private String sender;
    //enum of type of message, a chat message contains data to be used by webapp, other messags keep track of status of user.
    private MessageType Type;

    public Message() {
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getSender() {
        return sender;
    }

    public void setSender(String sender) {
        this.sender = sender;
    }

    public MessageType getType() {
        return Type;
    }

    public void setType(MessageType type) {
        Type = type;
    }

    public enum MessageType{
        CHAT, LEAVE, JOIN
    }

}
