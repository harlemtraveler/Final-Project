import React, { Component } from 'react';
// import { compose } from 'redux';
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
import 'whatwg-fetch';
import TestUserList from './components/TestUserList';

const BASE_URL = process.env.REACT_APP_BASE_URL;
const query = '';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      products: [],
      user:[]
    };
    this.fetchUsers = this.fetchUsers.bind(this);
    this.fetchProucts = this.fetchProucts.bind(this);
    this.fetchSingleUser = this.fetchSingleUser.bind(this);
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

  fetchSingleUser(id) {
    console.log(id)
    fetch(`http://localhost:3001/users/${id}`)
      .then(resp => resp.json())
      .then(data => this.setState({
        user: data
      }));
  }

  componentDidMount() {
    this.fetchUsers();
    this.fetchProucts();
    // this.fetchSingleUser(id);
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
    const RenderSingleUser = (props) => {
      return (
        <User
          user={this.state.user}
        />
      );
    }
    //
    // const findUser = (props) => {
    //   // const index = this.state.users.findIndex((user) =>user.user_id === parseInt(id, 10));
    //   const index =
    //   return (
    //     <User
    //       user={this.state.users[index]}
    //     />
    //   );
    // }


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
            {/* <Route path="/user/" render={RenderSingleUser} /> */}
            <Route path="/user/:id"
              props={this.props.params}
              render={RenderSingleUser}
            />
            {/* The last route renders a 404 error page
              when there is no matching path available */}
            <Route component={Whoops404} />
          </Switch>
        </div>
    );
  }
}

export default App;
