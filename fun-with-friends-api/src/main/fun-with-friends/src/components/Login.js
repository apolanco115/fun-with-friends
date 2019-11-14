import React, {Component} from "react";
import SignUp from "./SignUp";
import Background from '../images/background_image.png';
import {TextField, Input, Button} from '@material-ui/core';

const pageStyle = {
    display: 'grid',
    alignContent: 'center',  
    justifyContent: 'center', 
    height: '100vh',
    backgroundSize: 'contain',
    // backgroundRepeat: 'no-repeat',
    // objectFit: 'cover',
    backgroundImage: `url(${Background})`

}

const buttonStyle = {
    // justifySelf: 'center',
    margin: 0
}

const formStyle = {
    margin: 0
    // alignSelf: 'center'
}

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            showLogin: true
        }
    }


    handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const loginResponse = await fetch(`/login`, {
                method: "post",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: this.state.username,
                    password: this.state.password,
                })
            })

            const loginJsonRes = await loginResponse.json();
            localStorage.setItem('user', loginJsonRes.token);
            console.log(loginJsonRes.token);
            if (loginJsonRes.token != null) {
                console.log("login success!")
                this.props.history.push('/draw-wf')
            } else {
                localStorage.clear();
                alert('please enter valid user info');
            }

        } catch (error) {
            console.log(error)
        }
    }

    handleChange = (event) => {
        console.log("event");
        this.setState({[event.target.name]: event.target.value})
    }
    handleClick = (event) =>{
        event.preventDefault();
        console.log(event.target.id)
        if(event.target.id==='login-toggle'){
            this.setState({showLogin: true});
        }else if(event.target.id==='signup-toggle'){
            this.setState({showLogin: false});
        }
    }

    render() {
        const loginForm = (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <TextField
                        type="text"
                        name="username"
                        placeholder="username"
                        value={this.state.username}
                        onChange={this.handleChange}
                        required
                    />
                    <br />
                    <TextField
                        type="password"
                        name="password"
                        placeholder="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                        required
                    />
                    <br />
                    <Button type="submit">login!</Button>
                </form>
            </div>
        );
        const signUpForm = <SignUp />
        return (
            <div style={pageStyle} className = 'form-style'>
                <div>    
                    <Button style={buttonStyle} id='login-toggle' onClick={() => this.setState({showLogin: true})}>Login </Button>
                    <Button style={buttonStyle} id='signup-toggle' onClick={() => this.setState({showLogin: false})}>Sign Up</Button>
                </div>
                <div style={formStyle}>
                    {this.state.showLogin ? loginForm: signUpForm}
                </div>
            </div>
        )
    }
}

const style = {
    margin: 15,
};

export default Login;