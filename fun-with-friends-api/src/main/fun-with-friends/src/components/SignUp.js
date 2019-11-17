import React, { Component } from 'react';
import {TextField, Input, Button } from '@material-ui/core';
import {
    withRouter
  } from 'react-router-dom'


class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            password_confirmation: ''
        }
    }
    // called upon submission of signup form, makes an async-await post request to API
    // then redirects to web app
    handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const signUpResponse = await fetch(`/signup`, {
                method: "post",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: this.state.username,
                    email: this.state.email,
                    password: this.state.password
                })
            })

            const signUpJsonRes = await signUpResponse.json();
            localStorage.setItem('user', signUpJsonRes.token);
            console.log(signUpJsonRes);
            if (signUpJsonRes.token != null) {
                console.log("signup success!")
                this.props.history.push('/draw-wf')
            } else if(signUpJsonRes.response==500){
                localStorage.clear();
                alert('there is already a user with that name');
            } else{
                localStorage.clear();
                alert('an unrecognized error has occurred, please try again')
            }

        } catch (error) {
            this.props.history.push('/draw-wf')
            console.log(error)
        }
    }
    //sets the username,password, and password confirm states.
    handleChange = (event) => {
        this.setState({[event.target.name] : event.target.value})
    }

    render() {
        return (
            <div>
                    <form onSubmit={this.handleSubmit}>
                        <TextField
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={this.state.email}
                            onChange={this.handleChange}
                            required
                        />
                        <br />
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
                        <TextField
                            type="password"
                            name="password_confirmation"
                            placeholder="confirm password"
                            value={this.state.password_confirmation}
                            onChange={this.handleChange}
                            required
                        />
                        <br />
                        <Button type="submit">sign up!</Button>

                    </form>
            </div>
        );
    }
}

export default withRouter(SignUp);