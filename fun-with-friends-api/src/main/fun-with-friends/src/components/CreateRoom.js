import React, {Component} from 'react'
import {Button, Input, TextField} from "@material-ui/core";


class CreateRoom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            roomAndUsers: {
                user: '',
                room: ''
            },
            isCreateRoom: true
        }
    }

    getUser = async () => {

        try {
            const getUserResponse = await fetch(`/user`, {
                method: "get",
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("user"),
                    // "Content-Type": "application/json"
                }
            })

            const getUserJsonRes = await getUserResponse.json();
            const username = getUserJsonRes.username
            console.log("the user is: " + username);
            this.setState({roomAndUsers: {...this.state.roomAndUsers, user: username}});
        } catch (error) {
            console.log('Error creating new Course!')
            console.log(error)
        }
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        this.getUser();
        let roomResponse = null;
        try {
            if (this.state.isCreateRoom) {
                roomResponse = await fetch(`game-room/create`, {
                    method: "post",
                    headers: {
                        Authorization: "Bearer " + localStorage.getItem("user"),
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        roomName: this.state.roomAndUsers.room
                    })
                })
            } else {
                roomResponse = await fetch(`game-room/join-${this.state.roomAndUsers.room}`, {
                    method: "post",
                    headers: {
                        Authorization: "Bearer " + localStorage.getItem("user"),
                        'Content-Type': 'application/json'
                    }
                })
            }

            const roomJsonRes = await roomResponse.json();
            // localStorage.setItem('user', roomJsonRes.token);
            console.log(roomJsonRes);
            // if (roomJsonRes.token != null) {
            //     console.log("signup success!")
            // } else {
            //     localStorage.clear();
            //     alert('please enter valid user info');
            // }

        } catch (error) {
            console.log('Error creating new Course!')
            console.log(error)
        }
        this.props.setUserAndRoom(this.state.roomAndUsers)
    }
    handleChange = (event) => {
        console.log("event");
        this.setState({roomAndUsers: {...this.state.roomAndUsers, room: event.target.value}});
        // this.setState({[event.target.name]: event.target.value})
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <TextField
                        type="text"
                        name="room"
                        placeholder="room"
                        value={this.state.roomAndUsers.room}
                        onChange={this.handleChange}
                        required
                    />

                    <Button id='create-toggle' type='submit'
                            onClick={() => this.setState({isCreateRoom: true})}>create </Button>
                    <Button id='join-toggle' type='submit'
                            onClick={() => this.setState({isCreateRoom: false})}>join</Button>
                </form>
            </div>
        );
    }
}

export default CreateRoom;