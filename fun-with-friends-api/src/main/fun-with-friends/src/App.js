import React, {Component} from "react";
import {HashRouter as Router, Switch, Route} from 'react-router-dom';
import DrawWithFriends from "./sketches/DrawWithFriends"
import Login from "./components/Login";

class App extends Component {

    render() {
        return (
            <Router>
                <div>
                    <Switch>
                       {/* routes to login/signup page*/}
                       <Route exact path='/' component={Login}/>
                       {/*routes to actual draw app*/}
                       <Route path='/draw-wf' component={DrawWithFriends}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
