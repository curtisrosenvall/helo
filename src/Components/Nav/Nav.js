import Axios from "axios";
import React, { Component } from "react";
import homeImage from "./homeImage";
import "./Nav.scss";
import newPostImg from "./newPostImg";
import PowerImg from "./powerImg";
import { withRouter } from "react-router";

class Nav extends Component {
  logout = async () => {
    await Axios.put(`/api/logout`);
    this.props.history.push("/");
  };
  render() {
    return (
      <div className="nav-container">
        <div className="nav-profile-container">
          {/* <img className="profile-imgage" alt=""></img> */}
        </div>
        <p>Curtis Rosenvall</p>
        <div className="nav-links">
          <img src={homeImage} alt=""></img>
          <img src={newPostImg} alt=""></img>
        </div>
        <br />
        <br />
        <br />
        <br />

        <div className="logout" onClick={this.logout}>
          <img src={PowerImg}></img>
        </div>
      </div>
    );
  }
}

export default withRouter(Nav);
