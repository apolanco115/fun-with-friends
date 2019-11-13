import React, {Component} from "react";
import P5Wrapper from 'react-p5-wrapper';
import Sketch from "react-p5";
import p5 from 'p5';
import SockJS from 'sockjs-client';
import Stomp from 'stompjs';
import CircularProgress from '@material-ui/core/CircularProgress';
import CreateRoom from "../components/CreateRoom";

class PongWithFriends extends Component {
    state = {
        sender: '',
        room: '',
        isPlayer2: true,
        showForm: true,
        isConnected: false,
    };
    numUsers;
    ws = null;
    stompClient = null;
    topic = null;
    currentSubscription = null;
    p = new p5();


    setupBeforeUnloadListener = () => {
        window.addEventListener("beforeunload", (ev) => {
            ev.preventDefault();
            const confirmationMessage = 'you are now leaving'
            this.disconnect(ev);
            ev.returnValue = confirmationMessage
            return confirmationMessage;
        });
    };

    componentDidMount() {
        this.setupBeforeUnloadListener();
    }

    componentWillUnmount() {
        this.setupBeforeUnloadListener();
    }

    setUserAndRoom = (usr) => {
        // this.login(usr);
        console.log("the set data:" + usr.user);
        this.setState({
            sender: usr.user,
            room: usr.room,
            showForm: false
        }, () => {
            const username = this.state.sender;
            this.joinRoom();
        })
    }

    getRoomDetails = async () => {
        try {
            const roomDetailsResponse = await fetch(`/game-room/${this.state.room}-details`,
                {
                    method: 'get',
                    headers: {
                        Authorization: "Bearer " + localStorage.getItem("user"),
                        "Content-Type": "application/json"
                    }
                });
            const roomDetailsJson = await roomDetailsResponse.json()
            console.log(roomDetailsJson)
            this.numUsers = roomDetailsJson.userCount;
            if (this.numUsers < 1) {
                this.setState({isPlayer2: false})
            }
            console.log(this.numUsers)
            if(this.numUsers==2){
                this.setState({hasBothPlayers: true})
                this.ws = new SockJS("/play");
                this.stompClient = Stomp.over(this.ws);
                this.stompClient.connect({}, this.onConnected)
            }
        }
         catch (e) {
            console.log('error obtaining room details')
            console.log(e)
        }
    }

    joinRoom = async () => {
        try {
            const joinRoomResponse = await fetch(`/game-room/join-${this.state.room}`,
                {
                    method: "post",
                    headers: {
                        Authorization: "Bearer " + localStorage.getItem("user"),
                        "Content-Type": "application/json"
                    }
                })
            this.getRoomDetails();

        } catch (error) {
            console.log('Error joining room!')
            console.log(error)
        }
    }

    onConnected = () => {
        this.enterRoom();
    }

    onMessageReceived = (message) => {
        const messageDat = JSON.parse(message.body);
        console.log("the sender: " + messageDat.sender)
        if ((messageDat.sender !== this.state.sender) && messageDat.type === 'CHAT') {
            this.updateMovements(messageDat);
        }
        console.log("received: " + messageDat)
    }


    enterRoom = () => {
        const username = this.state.name;
        this.topic = `/app/game/${this.state.room}`;
        if (this.currentSubscription) {
            this.currentSubscription.unsubscribe();
        }
        this.currentSubscription = this.stompClient.subscribe(`/topic/${this.state.room}`, this.onMessageReceived);

        this.stompClient.send(`${this.topic}/addUser`, {}, JSON.stringify({sender: username, type: 'JOIN'}));
        this.setState({isConnected: true})

    }


    leaveRoom = async () => {
        try {
            const leaveRoomResponse = await fetch(`/game-room/leave`,
                {
                    method: "post",
                    headers: {
                        Authorization: "Bearer " + localStorage.getItem("user"),
                        "Content-Type": "application/json"
                    }
                })
        } catch (e) {
            console.log('Error leaving room!');
            console.log(e);
        }
    }

    disconnect = (event) => {
        if (this.stompClient !== null) {
            this.leaveRoom();
            console.log("left room");
            // Tell your username to the server
            this.currentSubscription = this.stompClient.subscribe(`/topic/${this.state.room}`, this.onMessageReceived);

            this.stompClient.send(`${this.topic}/addUser`, {}, JSON.stringify({
                sender: this.state.name,
                type: 'LEAVE'
            }));
            this.setState({isConnected: false})
            this.stompClient.disconnect({});
        }
        event.preventDefault();

    }


    canvasWidth = 800;
    canvasHeight = 800;
    goUp;
    goDown;

    ball = {
        ballX: Math.floor(Math.random() * 300) + 50,
        ballY: 50,
        diameter: 50,
        ballVx: 5,
        ballVy: 7,
        canvasWidth: null,
        canvasHeight: null,
        p: null,
        moveAndDraw: function () {
            this.p.fill(255, 0, 255);
            this.p.ellipse(this.ballX, this.ballY, this.diameter, this.diameter);
            this.p.fill('#FFFFFF');

            this.ballX += this.ballVx;
            this.ballY += this.ballVy;
            if (this.ballX < this.diameter * 0.5 || this.ballX > this.canvasWidth - this.diameter * 0.5) {
                this.ballVx *= -1;
            }
            if (this.ballY < this.diameter * 0.5 || this.ballY > this.canvasHeight - this.diameter * 0.5) {
                this.ballVy *= -1;
            }
        }

    }

    paddle = {
        paddleWidth: 20,
        paddleHeight: 150,
        paddleX: 20,
        paddleY: 0,
        canvasWidth: null,
        isPlayer2: false,
        p: null,
        drawPaddle: function () {
            if (!this.isPlayer2) {
                this.p.fill(255);
                this.p.rect(this.paddleX, this.paddleY, this.paddleWidth, this.paddleHeight);
            } else {
                this.p.fill(255);
                this.p.rect(this.canvasWidth - 2 * this.paddleWidth, this.paddleY, this.paddleWidth, this.paddleHeight);
            }

        }
    }


    ball = Object.create(this.ball,
        {
            canvasWidth:
                {value: this.canvasWidth},
            canvasHeight:
                {value: this.canvasHeight},
            p:
                {value: this.p}
        }
    );

    paddle1 = Object.create(this.paddle,
        {
            canvasWidth:
                {value: this.canvasWidth},
            isPlayer2:
                {value: false},
            p:
                {value: this.p}
        });

    paddle2 = Object.create(this.paddle,
        {
            canvasWidth:
                {value: this.canvasWidth},
            isPlayer2:
                {value: true},
            p:
                {value: this.p}
        });

    setup = (p5, parent) => {
        this.p.createCanvas(this.canvasWidth, this.canvasHeight).parent(parent);
        this.p.frameRate(60);
    }

    updateMovements = (messageContent) => {
        const data = JSON.parse(messageContent.content);
        this.paddle1.paddleY = data.paddle1Y;
        this.paddle2.paddleY = data.paddle2Y;
        this.ball.ballX = data.ballX;
        this.ball.ballY = data.ballY;
        this.ball.ballVx = data.ballVy;
    }

    sendMovements = () => {
        if (this.goUp === 1) {
            if (!this.state.isPlayer2) {
                this.paddle1.paddleY -= 10;
            } else {
                this.paddle2.paddleY -= 10;
            }
        }
        if (this.goDown === 1) {
            if (!this.state.isPlayer2) {
                this.paddle1.paddleY += 10;
            } else {
                this.paddle2.paddleY += 10;
            }
        }
        if ((this.paddle1.paddleY + this.paddle1.paddleHeight) > this.canvasHeight) {
            this.paddle1.paddleY = this.canvasHeight - this.paddle1.paddleHeight;
        }
        if (this.paddle1.paddleY < 0) {
            this.paddle1.paddleY = 0;
        }
        if ((this.ball.ballY > this.paddle1.paddleY && this.ball.ballY < this.paddle1.paddleY + this.paddle1.paddleHeight) && (this.ball.ballX - this.ball.diameter / 2 <= 40)) {
            this.ball.ballVx *= -1;
        }
        const data = {
            sender: this.state.sender,
            content: JSON.stringify({
                paddle1Y: this.paddle1.paddleY,
                paddle2Y: this.paddle2.paddleY,
                ballX: this.ball.ballX,
                ballY: this.ball.ballY,
                ballVx: this.ball.ballVx
            }),
            type: 'CHAT'
        }
        //send data code below
        this.stompClient.send(`${this.topic}/sendMessage`, {}, JSON.stringify(data));
        if(this.state.hasBothPlayers){
        this.ball.moveAndDraw();
        this.paddle1.drawPaddle()
        this.paddle2.drawPaddle()}

    }

    draw = (p5) => {
        this.p.background(51);
        this.sendMovements();

    }

    keyPressed = (p5) => {
        if (this.p.keyCode === this.p.UP_ARROW) {
            this.goUp = 1;

        }
        if (this.p.keyCode === this.p.DOWN_ARROW) {
            this.goDown = 1;

        }
    }

    keyReleased = (p5) => {
        if (this.p.keyCode === this.p.UP_ARROW) {
            this.goUp = 0;
        }
        if (this.p.keyCode === this.p.DOWN_ARROW) {
            this.goDown = 0;
        }

    }

    render() {
        const form = (
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
                <CreateRoom setUserAndRoom={this.setUserAndRoom}/>
            </div>
        )
        const loading = (
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
                <CircularProgress/>
            </div>
        )

        const canvas = (
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
                {/*<P5Wrapper sketch={this.sketch} />*/}
                <Sketch setup={this.setup} draw={this.draw} keyPressed={this.keyPressed}
                        keyReleased={this.keyReleased}/>

            </div>
        )
        // return canvas;
        return (this.state.showForm ? form : (this.state.isConnected) ? canvas : loading)

    }

}

export default PongWithFriends;