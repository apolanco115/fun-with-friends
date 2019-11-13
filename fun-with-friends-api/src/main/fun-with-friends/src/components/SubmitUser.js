import React, { Component } from 'react'

class SubmitUser extends Component {
    state = {
      user: { name: '', password: '', room: ''}
    }
    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state.user)
        this.props.submitUser(this.state.user)
    }


    render () {
        return (
        <div>
            <form onSubmit={this.handleSubmit}>
              <div>
              <p style={{margin: 0}} htmlFor="name">Username</p>
                <input
                  name="name"
                  type="text"
                  value={this.state.user.name}
                  onChange = {(e) => this.setState({ user: { ...this.state.user, name: e.target.value} })}
                  />
              </div>
              <div>
              <p style={{margin: 0}} htmlFor="password">Password</p>
                <input
                  name="password"
                  type="password"
                  value={this.state.user.password}
                  onChange = {(e) => this.setState({ user: { ...this.state.user, password: e.target.value} })}
                  />
              </div>
              <div>
              <p style={{margin: 0}} htmlFor="roomId">Room</p>
                <input
                  value={this.state.user.room}
                  name="room"
                  type="text"
                  onChange = {(e) => this.setState({user: { ...this.state.user, room: e.target.value} })}

                  />
              </div>
              <div>
                <input type="submit" value="submit user"/>
              </div>
            </form>
        </div>
        )
    }
}

export default SubmitUser;