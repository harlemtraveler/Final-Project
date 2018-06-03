import React, { Component } from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import './App2.css';
import UserList from './components/UserList';
import ProductTable from './components/ProductTable';
import Products from './components/Products';
import ProfilePicture from './img/profile_picture.png';
import ComputerIcon from './img/computer.png';
import Home from './components/Home';
import About from './components/about/About';
import Contact from './components/Contact'
import UserProfile from './components/UserProfile';
import User from './components/User';
import Whoops404 from './components/Whoops404';
import 'whatwg-fetch'
import { compose } from 'redux';

const BASE_URL = process.env.REACT_APP_BASE_URL;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      products: [],
    };
    this.fetchUsers = this.fetchUsers.bind(this);
    this.fetchProucts = this.fetchProucts.bind(this);
  }

  fetchUsers() {
    fetch(`http://localhost:3001/users`)
      .then(resp => resp.json())
      .then(data => this.setState({
        users: data
      }));
  }

  fetchProucts() {
    fetch('http://localhost:3001/products')
      .then(resp => resp.json())
      .then(data => this.setState({
        products: data
      }));
  }

  componentDidMount() {
    this.fetchUsers();
    this.fetchProucts();
  }
  //       {/* <div>{JSON.stringify(this.state.users)}</div> */}
  //       <div>{BASE_URL}</div>

  render() {
    const RenderUserList = (props) => {
      return (
        <UserList
          users={this.state.users}
        />
      )
    }
    const RenderProductsPage = (props) => {
      return (
        <Products
          products={this.state.products}
        />
      );
    }
    return (
        <div className="App">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            {/* The below redirects send the user to to correct
              About menu sub-pages  */}
            <Redirect from="/history" to="/abouut/history" />
            <Redirect from="/services" to="/abouut/services" />
            <Redirect from="/location" to="/abouut/location" />
            <Route path="/contact" component={Contact} />
            <Route path="/products" render={RenderProductsPage} />
            <Route path="/users" render={RenderUserList} />
            <Route path="/profile" render={UserProfile} />
            {/* The last route renders a 404 error page
              when there is no matching path available */}
            <Route component={Whoops404} />
          </Switch>
        </div>
    );
  }
}

export default App;
