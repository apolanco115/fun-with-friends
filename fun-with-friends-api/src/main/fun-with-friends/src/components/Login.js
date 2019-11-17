import React, {Component} from "react";
import SignUp from "./SignUp";
import Background from '../images/background_image.png';
import {TextField, Input, Button} from '@material-ui/core';

//styling for login page
const pageStyle = {
    display: 'grid',
    alignContent: 'center',  
    justifyContent: 'center', 
    height: '100vh',
    backgroundSize: 'contain',
    backgroundImage: `url(${Background})`
}

//styling for buttons associated with form
const buttonStyle = {
    margin: 0
}

//styling for the login/signup forms
const formStyle = {
    margin: 0
}

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            showLogin: true //keeps track of which form (login or sign up) to render
        }
    }

// called upon submission of login form, makes an async-await post request to API then redirects to web app
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
                //redirects to webapp if non-null token
                this.props.history.push('/draw-wf')
            } else {
                localStorage.clear();
                alert('please enter valid user info');
            }

        } catch (error) {
            console.log(error)
        }
    }

    //sets the username and password states.
    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
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

export default Login;