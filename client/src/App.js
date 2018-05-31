import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import UserDetail from './components/UserDetail';
import UserList from './components/UserList';
import ProductTable from './components/ProductTable';
import ProfilePicture from './img/profile_picture.png';
import ComputerIcon from './img/computer.png';
import NeonLights from './img/neon-lights.png';
import Home from './components/Home';
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
        <div className="app">
          <main>
            <Route exact path="/" component={Home} />
            <Route path="/products" component={ProductTable} />
            <Route exact path="/users" component={UserList} />
          </main>
        </div>
    );
  }
}

export default App;
