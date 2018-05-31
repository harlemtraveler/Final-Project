import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Product from './Product';
import UserDetail from './UserDetail';
import UserList from './UserList';
import ProductTable from './ProductTable';
import ProfilePicture from './img/profile_picture.png';
import ComputerIcon from './img/computer.png';
import NeonLights from './img/neon-lights.png'
import 'whatwg-fetch'
const BASE_URL = process.env.REACT_APP_BASE_URL;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      products: [],
    };
  }

  componentDidMount() {
    fetch(`http://localhost:3001/users`)
      .then(resp => resp.json())
      .then(data => this.setState({
        users: data
      }));

    fetch(`http://localhost:3001/products`)
      .then(resp => resp.json())
      .then(data => this.setState({
        products: data
      }));
  }
  //       {/* <div>{JSON.stringify(this.state.users)}</div> */}
  //       <div>{BASE_URL}</div>

  render() {
    return (
      <div className="navigation-bar">
        <header>
        <nav>
          <ul>
            <li className="flex-item item-one">
              <img src={ComputerIcon} className="computer-icon" />
            </li>
            <li className="flex-item">
              <a src="#">Saved</a>
            </li>
            <li className="flex-item">
              <a src="#">Messages</a>
            </li>
            <li className="flex-item">
              <a
                src={ProductTable}
              >
                Repo
              </a>
            </li>
            <li className="flex-item">
              <img src={ProfilePicture} className="profile-picture" />
            </li>
          </ul>
        </nav>
        <div className="banner-image-container">
          <p className="banner-text">
          Making DevOps a little easier
          </p>
          <button className="banner-button">
          Explore Scripts
        </button>
        </div>
      </header>
      <section className="main">
        <article>
          <figure></figure>
        </article>
        <article>
          <figure></figure>
        </article>
      </section>
      <aside>
        <section></section>
        <section></section>
      </aside>
      </div>
      // <div className="container">
      //   <UserList
      //     users={this.state.users}
      //   />
      //   <br />
      //   <br />
      //   <br />
      //   <ProductTable
      //     products={this.state.products}
      //   />
      // </div>
    )
  }
}

export default App;
