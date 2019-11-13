package com.example.springwebsocket.model;

public class Message {
    private String content;
    private String sender;
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
