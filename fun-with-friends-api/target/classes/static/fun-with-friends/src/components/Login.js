import React, {Component} from "react";
import SignUp from "./SignUp";
import {TextField, Input, Button} from '@material-ui/core';


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
            } else {
                localStorage.clear();
                alert('please enter valid user info');
            }

        } catch (error) {
            console.log('Error creating new Course!')
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
            console.log('login!')
            this.setState({showLogin: true});
        }else if(event.target.id==='signup-toggle'){
            console.log('signUp!')
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

                    <TextField
                        type="password"
                        name="password"
                        placeholder="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                        required
                    />
                    <Input type="submit" placeholder='sign up!'/>
                </form>
            </div>
        );
        const signUpForm = <SignUp />
        return (
            <div>
            {this.state.showLogin ? loginForm: signUpForm}
            <Button id='login-toggle' onClick={() => this.setState({showLogin: true})}>Login </Button>
            <Button id='signup-toggle' onClick={() => this.setState({showLogin: false})}>Sign Up</Button>
            </div>
        )
    }
}

const style = {
    margin: 15,
};

export default Login;