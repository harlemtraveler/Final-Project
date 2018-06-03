import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import '../App.css';
import Product from '../Product';
import UserDetail from './UserDetail';
import UserList from './UserList';
import ProductTable from './ProductTable';
import Header from './partials/Header';
import ProfilePicture from '../img/profile_picture.png';
import ComputerIcon from '../img/computer.png';
import NeonLights from '../img/neon-lights.png';
import PageTemplate from './partials/PageTemplate';
import { Link } from 'react-router-dom';
import 'whatwg-fetch'
const BASE_URL = process.env.REACT_APP_BASE_URL;

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      products: [],
      user: [],
    };
    this.findUser = this.findUser.bind(this);
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

  findUser(id) {
    fetch(`http://localhost:3001/users/${id}`)
      .then(resp => resp.json())
      .then(data => this.setState({
        user: data.contents
      }));
    <UserDetail
      user={this.state.user}
    />
    console.log(this.state.user)
  }
  //       {/* <div>{JSON.stringify(this.state.users)}</div> */}
  //       <div>{BASE_URL}</div>

  render() {
    return (
      <div className="home-container">
        <PageTemplate />

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

        <div className="content-container">
          <div className="userslist-container">
            {/* <UserList
              users={this.state.users}
            /> */}
          </div>
          <br />
          <br />
          <br />
          <div className="product-table-container">
            {/* <ProductTable
              products={this.state.products}
            /> */}
          </div>
        </div>
      </div>

    )
  }
}

export default Home;
