import React, { Component } from 'react';
import {TextField, Input } from '@material-ui/core';


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
                        <TextField
                            type="password"
                            name="password_confirmation"
                            placeholder="confirm password"
                            value={this.state.password_confirmation}
                            onChange={this.handleChange}
                            required
                        />
                        <Input type="submit" placeholder='sign up!'/>
                    </form>
            </div>
        );
    }
}

const style = {
    margin: 15,
};
export default SignUp;