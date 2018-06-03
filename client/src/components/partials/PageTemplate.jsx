import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { MainMenu } from './MainMenu';
import ProfilePicture from '../../img/profile_picture.png';
import ComputerIcon from '../../img/computer.png';
import Products from '../Products';
import UserDetail from '../UserDetail';
import UserList from '../UserList';
import ProductTable from '../ProductTable';
// import './App.css';
// import './App2.css';

const PageTemplate = ({ children }) =>
  <div className="page">
    <MainMenu />
    {children}
  </div>

export const Home = () =>
  <PageTemplate>
    <section className="home">
      <img
        src={ComputerIcon}
        className="computer-icon"
      />
    </section>
  </PageTemplate>

export const About = ({ match }) =>
  <PageTemplate>
    <section className="about">
      <h1>About</h1>
    </section>
  </PageTemplate>

export const Saved = () =>
  <PageTemplate>
    <section className="saved">
      <h1>Saved</h1>
    </section>
  </PageTemplate>

export const Contact = () =>
  <PageTemplate>
    <section className="contact">
      <h1>Contact</h1>
    </section>
  </PageTemplate>

export const Profile = () =>
  <PageTemplate>
    <section className="profile">
      <img
        src={ProfilePicture}
        className="profile-picture"
      />
    </section>
  </PageTemplate>

export default PageTemplate;
