import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import Login from './Login';

import SignUp from './SignUp';
class Loginscreen extends Component {
    constructor(props){
        super(props);
        this.state={
            username:'',
            password:'',
            loginscreen:[],
            loginmessage:'',
            buttonLabel:'sign up',
            isLogin:true
        }
    }
    componentWillMount(){
        const loginscreen=[];
        loginscreen.push(<Login parentContext={this} appContext={this.props.parentContext}/>);
        const loginmessage = "Not signed up yet, sign up Now";
        this.setState({
            loginscreen:loginscreen,
            loginmessage:loginmessage
        })
    }

    handleClick(event){
        // console.log("event",event);
        let loginmessage;
        if(this.state.isLogin){
            var loginscreen=[];
            loginscreen.push(<SignUp parentContext={this}/>);
            loginmessage = "Already signed up. Go to Login";
            this.setState({
                loginscreen:loginscreen,
                loginmessage:loginmessage,
                buttonLabel:"Login",
                isLogin:false
            })
        }
        else{
            const loginscreen=[];
            loginscreen.push(<Login parentContext={this}/>);
            loginmessage = "Not signed up yet.Go to registration";
            this.setState({
                loginscreen:loginscreen,
                loginmessage:loginmessage,
                buttonLabel:"sign up",
                isLogin:true
            })
        }
    }




    render() {
        return (
            <div className="loginscreen">
                {this.state.loginscreen}
                <div>
                    {this.state.loginmessage}
                    <MuiThemeProvider>
                        <div>
                            <RaisedButton label={this.state.buttonLabel} primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
                        </div>
                    </MuiThemeProvider>
                </div>
            </div>
        );
    }
}
const style = {
    margin: 15,
};
export default Loginscreen;