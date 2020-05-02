import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }//constructor

  handleChangeToUsername = (event) => {
    //console.log(this)
    console.log("Input username: ", event.target.value)
    this.setState({
      username: event.target.value
    })
    console.log("New username in state: ", this.state.username)
  }//handleChangeToUsername

  handleChangeToPassword = (event) => {
    this.setState({
      password: event.target.value 
    })
  }//handleChangeToEvent

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("In handleSubmit, this.state.username: ", this.state.username)
    if (this.state.username.length > 0 && this.state.password.length > 0) {
      //debugger 
      this.props.handleLogin(this.state.username, this.state.password)
    }//if
  }//handleSubmit

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="username" 
              name="username" 
              type="text" 
              value={this.state.username} 
              onChange={this.handleChangeToUsername.bind(this)} 
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" 
              name="password" 
              type="password" 
              value={this.state.password} 
              onChange={this.handleChangeToPassword.bind(this)} 
            />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );//return
  }//render
}//class

export default LoginForm;