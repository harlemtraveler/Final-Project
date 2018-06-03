import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';
import Header from './partials/Header';
import ComputerIcon from '../img/computer.png';
import ProfilePicture from '../img/profile_picture.png';
import PageTemplate from './partials/PageTemplate';


export default function UserProfile(props) {
  return (
    <div>
      <PageTemplate />
      <h1>Profile Page</h1>
    </div>
  );
}
