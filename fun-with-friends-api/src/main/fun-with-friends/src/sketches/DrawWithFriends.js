import React, {Component} from "react";
import Sketch from "react-p5";
import p5 from 'p5';
import SockJS from 'sockjs-client';
import Stomp from 'stompjs';
import CircularProgress from '@material-ui/core/CircularProgress';
import SubmitUser from "../components/SubmitUser";
import CreateRoom from "../components/CreateRoom";
import styled from 'styled-components';
import { template } from "@babel/core";

const sliderThumbStyles = (props) => (`
  width: 1.5em;
  height: 1.5em;
  background: ${props.color};
  cursor: pointer;
  -webkit-transition: .2s;
  transition: opacity .2s;
`);


const Styles = styled.div`
  display: grid;
  color: #FFF;
  margin-top: 2rem;
  margin-bottom: 2rem;
  .value {
    justify-self: center;
    font-family: Sans-serif;  
    font-size: 2rem;
    margin : .5em;
  }
  .slider {
    justify-self: center;
    -webkit-appearance: none;
    width: 75%;
    height: .4em;
    border-radius: 1em;
    background: #cdcdcd
    outline: none;
    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      ${props => sliderThumbStyles(props)}
    }
  }

`;

const pageStyle = {
    height: '100vh',
    display: 'grid',
    gridTemplateColumns: 1,
    gridTemplateColumns: '85% 15%',
    background: '#656565'
    
}

const canvasStyle = {
    gridRowStart: 1,
    gridColumnEnd: 2
}

const colSlider = {
    height: '15%', 
    background: 'linear-gradient(to right, red, orange, yellow, lime,Turquoise,Cyan, Blue, Violet, Crimson,red)'
}

class DrawWithFriends extends Component {
    state = {
        sender: '',
        room: '',
        showForm: true,
        isConnected: false,
        colorValue: .7,
        brushRadius: 10
    };
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


    ws = null;
    stompClient = null;
    topic = null;
    currentSubscription = null;
    p = new p5();

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
            this.ws = new SockJS("/play");
            this.stompClient = Stomp.over(this.ws);
            this.stompClient.connect({}, this.onConnected)
        } catch (error) {
            console.log('Error joining room!')
            console.log(error)
        }
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
        }catch (e) {
            console.log('Error leaving room!');
            console.log(e);
        }
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

    onConnected = () => {
        this.enterRoom();
    }

    disconnect = (event) => {
        if (this.stompClient !== null) {
            this.leaveRoom();
            console.log("left room");
            // Tell your username to the server
            this.currentSubscription = this.stompClient.subscribe(`/topic/${this.state.room}`, this.onMessageReceived);

            this.stompClient.send(`${this.topic}/addUser`, {}, JSON.stringify({sender: this.state.name, type: 'LEAVE'}));
            this.setState({isConnected: false})
            this.stompClient.disconnect({}, this.onDisconnected);
        }
        event.preventDefault();

    }

    onDisconnected = () => {
        this.leaveRoom();
        console.log("left room");
        // Tell your username to the server
        this.currentSubscription = this.stompClient.subscribe(`/topic/${this.state.room}`, this.onMessageReceived);

        this.stompClient.send(`${this.topic}/addUser`, {}, JSON.stringify({sender: this.state.name, type: 'LEAVE'}));
        this.setState({isConnected: false})
    }

    onMessageReceived = (message) => {
        const messageDat = JSON.parse(message.body);
        console.log("the sender: " + messageDat.sender)
        if ((messageDat.sender !== this.state.sender) && messageDat.type === 'CHAT') {
            this.newDrawing(messageDat);
        }
        console.log("received: " + messageDat)
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
            // if (username) {

            // }
        })
    }

    canvasWidth = 0.8365*this.p.windowWidth;
    canvasHeight = this.p.windowHeight;
    setup = (p5, parent) => {
        this.p.createCanvas(this.canvasWidth, this.canvasHeight).parent(parent);
        this.p.background(51);
        // const slider = this.p.createSlider(0, 255, 100);

        // const color_picker = this.p.createColorPicker("green").parent(parent);

    }
    HUEtoRGB = (H) => {
        let R = Math.abs(H * 6.0 - 3.0) - 1.0;
        let G = 2.0 - Math.abs(H * 6.0 - 2.0);
        let B = 2.0 - Math.abs(H * 6.0 - 4.0);
        return [Math.max(0, Math.min(255, R*255)),
            Math.max(0, Math.min(255, G*255)),
            Math.max(0, Math.min(255, B*255))];
    }


    newDrawing = (messageContent) => {
        const data = JSON.parse(messageContent.content)
        console.log("the sender is: " + this.state.sender);
        console.log("the data:" + data.mouseX)
        console.log("the data:" + data.mouseY)
        console.log("the data r,g,b: " + data.r + " " + data.g + " " + data.b)
        this.p.noStroke();
        this.p.fill(data.r, data.g, data.b)
        this.p.ellipse(data.mouseX, data.mouseY, data.brushRadius, data.brushRadius);
    }

    mouseDragged = (p5) => {
        console.log('sending: ' + this.p.mouseX + ',' + this.p.mouseY);
        const fillCol = this.HUEtoRGB(this.state.colorValue);
        const r = fillCol[0];
        const g = fillCol[1];
        const b = fillCol[2];
        const data = {
            sender: this.state.sender,
            content: JSON.stringify({
                r: parseInt(r),
                g: parseInt(g),
                b: parseInt(b),
                mouseX: parseInt(this.p.mouseX),
                mouseY: parseInt(this.p.mouseY),
                brushRadius: parseInt(this.state.brushRadius)
            }),
            type: 'CHAT'
        }
        if(this.p.mouseX >= 0 && this.p.mouseY >= 0){
            console.log("the mouse position X: "+ this.p.mouseX +" is less than " +this.canvasWidth);
            console.log("the mouse position Y: "+ this.p.mouseY +" is less than " +this.canvasHeight);
            if(this.p.mouseX<this.canvasWidth && this.p.mouseY < this.canvasHeight)
                this.stompClient.send(`${this.topic}/sendMessage`, {}, JSON.stringify(data))
        }
        this.p.noStroke();
        this.p.fill(r, g, b);
        this.p.ellipse(parseInt(this.p.mouseX), parseInt(this.p.mouseY), parseInt(this.state.brushRadius), parseInt(this.state.brushRadius));

    }

    handleColorChange = (e) => {
        this.setState({colorValue: e.target.value})
    }

    handleRadiusChange = (e) => {
        this.setState( {brushRadius: e.target.value})
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
            <div style={pageStyle}>
                <div>
                    <Styles color ={`rgb(${this.HUEtoRGB(this.state.colorValue)[0]},${this.HUEtoRGB(this.state.colorValue)[1]},${this.HUEtoRGB(this.state.colorValue)[2]})`}>
                    <div className="value">color slider</div>
                        <input style = {colSlider} type='range' min={0} step={0.001} max={1} className='slider col-slider' value={this.state.colorValue} onChange={this.handleColorChange}/>
                    </Styles>
                    <Styles color={'#333'}>
                        <div className="value">brush radius: {this.state.brushRadius}px</div>
                        <input type='range' min={1} max={50} className='slider brush-rad' value={this.state.brushRadius} onChange={this.handleRadiusChange}/>
                    </Styles>
                </div>
                <Sketch style = {canvasStyle} setup={this.setup} draw={this.draw} mouseDragged={this.mouseDragged} />
            </div>
        )
        // return (this.state.showForm ? form : (this.state.isConnected) ? canvas : loading)
            return canvas;
    }
}

export default DrawWithFriends;