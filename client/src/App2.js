import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import UserDetail from './components/UserDetail';
import UserList from './components/UserList';
import ProductTable from './components/ProductTable';
import ProfilePicture from './img/profile_picture.png';
import ComputerIcon from './img/computer.png';
import NeonLights from './img/neon-lights.png';
import Home from './components/Home';
import User from './components/User';
import './App.css';
import 'whatwg-fetch'
const BASE_URL = process.env.REACT_APP_BASE_URL;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      products: []
    };
  }
}

fetchUsers() {
  fetch(`http://localhost:3001/users`)
    .then(resp => {
      if (!resp.ok) {
        throw Error('[*] Issue with the Users fetch request')
      }
      resp.json()
    })
    .then(data => this.setState({
      users: data.content
    }));
}

fetchProducts() {
  fetch(`http://localhost:3001/products`)
    .then(resp => {
      if (!resp.ok) {
        throw Error('[*] Issue with the Products fetch request')
      }
      resp.json()
    })
    .then(data => this.setState({
      products: data.content
    }));
}

findUser(id) {
    console.log(`This is the user to edit: ${id}`);
    const index = this.state.users.findIndex((user) =>user.user_id === parseInt(id, 10));
    return (this.state.users[index]);
}

findProduct(id) {
    console.log(`This is the product to edit: ${id}`);
    const index = this.state.products.findIndex((product) =>product.product_id === parseInt(id, 10));
    return (this.state.products[index]);
}

fetch(url, options)
  .then(resp => {
    if (!resp.ok) throw new error ('You messed up');
    return (resp.json);
  })
  .then(respBody=> {
    console.log(respBody.data);
  })
//Can I use the same function for users and products?
updateUser(user) {
  const options = {
    method: 'PUT',
    headers: {
      'Accept': 'application/json',
      'Content-type': 'application/json',
    },
    body: JSON.stringify(user)
  };
}
//Can I use the same variable for users and products?
const url = `users/${users.user_id}`;

componentDidMount() {
  this.fetchUsers();
  this.fetchProucts();
}

render() {
  return (
    <div className="App"></div>
  );
}
