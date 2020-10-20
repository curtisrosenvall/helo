import React, { Component } from "react";
import axios from "axios";
import "./Auth.scss";
import image from "./image";
import { connect } from "react-redux";
import { addUser } from "../../ducks/reducer";

class Auth extends Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: "",
      profilePic: "",
    };
  }
  handleUsernameChange = (e) => {
    this.setState({ username: e.target.value });
  };

  handlePasswordChange = (e) => {
    this.setState({ password: e.target.value });
  };
  handleRegister = () => {
    const { username, password } = this.state;
    axios
      .post("/api/register", { username, password })
      .then((res) => {
        this.props.addUser(res.data);
        this.props.history.push("/dashboard");
      })
      .catch((err) => console.log(err));
  };
  handleLogin = () => {
    const { username, password } = this.state;
    axios
      .post("/api/login", { username, password })
      .then((res) => {
        this.props.addUser(res.data);
        this.props.history.push("/dashboard");
      })
      .catch((err) => console.log(err));
  };
  render() {
    return (
      <div className="auth-container">
        <div className="input-container">
          <img src={image} alt="logo"></img>
          <h1>Helo</h1>
          <div className="inputs">
            <p>Username : </p>
            <input
              type="text"
              placeholder="Username"
              onChange={this.handleUsernameChange}
            />
          </div>
          <div className="inputs">
            <p>Password : </p>
            <input
              type="password"
              placeholder="Password"
              onChange={this.handlePasswordChange}
            />
          </div>
          <div className="buttons">
            <button onClick={this.handleRegister}>Register</button>
            <button onClick={this.handleLogin}>Login</button>
          </div>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps, { addUser })(Auth);
