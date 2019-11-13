import React, {Component} from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import DrawWithFriends from "./sketches/DrawWithFriends"
import Login from "./components/Login";
import CreateRoom from "./components/CreateRoom";
import PongWithFriends from "./sketches/PongWithFriends";
import Slider from "./components/Slider";

class App extends Component {

    render() {
        return (
            <Router>
                <div>
                    <Switch>
                       <Route path='/' exact component={Login}/>
                       <Route path='/draw-wf' component={DrawWithFriends}/>
                    {/*    /!*<Route path='/pong-wf' component={PongWithFriends}/>*!/*/}
                    {/*    <Route path='/rooms' component={CreateRoom}/>*/}
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
