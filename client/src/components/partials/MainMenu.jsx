import React, { Component } from 'react';
import { Switch, Route, Redirect, NavLink } from 'react-router-dom';
import ProfilePicture from '../../img/profile_picture.png';
import ComputerIcon from '../../img/computer.png';
import PageTemplate from './PageTemplate';
import Products from '../Products';
import UserDetail from '../UserDetail';
import UserList from '../UserList';
import ProductTable from '../ProductTable';

const selectedStyle = {
  backgroundColor: "white",
  color: "slategray"
}

export const MainMenu = () =>
  <nav className="main-menu">
    <NavLink to="/" className="item-one">
      <img src={ComputerIcon} className="computer-icon" />
    </NavLink>
    <NavLink to="/about" activeStyle={selectedStyle} className="flex-item">
      About
    </NavLink>
    <NavLink to="/saved" activeStyle={selectedStyle} className="flex-item">
      Saved
    </NavLink>
    <NavLink to="/products" activeStyle={selectedStyle} className="flex-item">
      <a src="#">Products</a>
    </NavLink>
    <NavLink to="/saved" activeStyle={selectedStyle} className="flex-item">
      <a src={ProductTable}>
        Repo
      </a>
    </NavLink>
    <NavLink to="/contact" activeStyle={selectedStyle} className="flex-item">
      <a src="#">Contact</a>
    </NavLink>
    <NavLink to="/profile" activeStyle={selectedStyle} className="flex-item">
      <img src={ProfilePicture} className="profile-picture" />
    </NavLink>
  </nav>

  export default MainMenu;
