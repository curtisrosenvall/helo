import React, { Component } from 'react'
import './Nav.scss';

export default class Nav extends Component {
    render() {
        return (
            <div className="nav-container">
                <div className="nav-profile-container">
                <img className="profile-imgage" alt=""></img>
                
                </div>
                <p>Curtis Rosenvall</p>
                <div className="nav-links">
                    <img className='create-post-image' alt=""></img>
                    <img className="" alt=""></img>
                </div>
            </div>
        )
    }
}
