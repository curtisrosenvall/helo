import React, { Component } from "react";
import homeImage from "./homeImage";
import "./Nav.scss";
import newPostImg from "./newPostImg";
import PowerImg from "./powerImg";

export default class Nav extends Component {
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
        <div className="logout">
            <img src={PowerImg}></img>
        </div>
      </div>
    );
  }
}
