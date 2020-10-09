import React, { Component } from "react";
import axios from "axios";

export default class Auth extends Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: "",
      profilePic: "",
    };
  }
  handleRegister = () => {
    const { username, password } = this.state;
    axios
      .post("/api/register", { username, password })
      .then((res) => {
        // redux stuff curt
        //ROUTES
      })
      .catch((err) => console.log(err));
  };
  handleLogin = () => {
      const {username, password} = this.state;
      axios.post('/api/login', {username, password})
      .then(res => {
        // redux stuff curt
        // ROUTES
      })
      .catch(err => console.log(err))
  };
  render() {
    return <div>Auth</div>;
  }
}
