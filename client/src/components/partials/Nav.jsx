import React, { Component } from 'react';
import { Switch, Route, Redirect, NavLink } from 'react-router-dom';
import ProductTable from './../ProductTable';
import ProfilePicture from '../../img/profile_picture.png';
import ComputerIcon from '../../img/computer.png';
// import '../../App.css';
// import '../../App2.css';

const selectedStyle = {
  backgroundColor: "white",
  color: "slategray"
}

class Nav extends Component {
  render() {
    return (
      <nav>
          <ul className="top-nav-ul">
            <li className="flex-item item-one">
              <NavLink to="/">
                <img src={ComputerIcon} className="computer-icon" />
              </NavLink>
            </li>
            <li className="flex-item">
              <NavLink to="/about" activeStyle={selectedStyle}>
                About
              </NavLink>
            </li>
            <li className="flex-item">
              <NavLink to="/saved" activeStyle={selectedStyle}>
                Saved
              </NavLink>
            </li>
            <li className="flex-item">
              <NavLink to="/products" activeStyle={selectedStyle}>
                <a src="#">Products</a>
              </NavLink>
            </li>
            <li className="flex-item">
              <NavLink to="/saved" activeStyle={selectedStyle}>
                <a
                  src={ProductTable}
                >
                  Repo
                </a>
              </NavLink>
            </li>
            <li className="flex-item">
              <NavLink to="/about" activeStyle={selectedStyle}>
                <a src="#">Contact</a>
              </NavLink>
            </li>
            <li className="flex-item">
              <NavLink to="/profile" activeStyle={selectedStyle}>
                <img src={ProfilePicture} className="profile-picture" />
              </NavLink>
            </li>
          </ul>
        </nav>
    );
  }
}

export default Nav;
