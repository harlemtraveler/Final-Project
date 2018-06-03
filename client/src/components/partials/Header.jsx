import React, { Component } from 'react';
import { Switch, Route, Redirect, NavLink } from 'react-router-dom';
import Nav from './Nav';

class Header extends Component {
  render() {
    return (
      <header>
        <Nav />
        <div className="banner-image-container">
          <p className="banner-text">
            Making DevOps a little easier
          </p>
        <NavLink to="/products">
          <button className="banner-button">
            Explore Scripts
          </button>
        </NavLink>
      </div>
    </header>
    );
  }
}

export default Header;
