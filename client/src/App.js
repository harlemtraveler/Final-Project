import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Product from './Product';
import UserDetail from './UserDetail';
import UserList from './UserList';
import 'whatwg-fetch'
const BASE_URL = process.env.REACT_APP_BASE_URL;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      users: []
    };

    // this.getUserDetails = this.getUserDetails.bind(this)
  }

  componentDidMount() {
    fetch(`http://localhost:3001/users`)
      .then(resp => resp.json())
      .then(data => this.setState({
        users: data
      }));
  }

  // getUserDetails(user) {
  //   <UserDetail
  //     user={user}
  //     key={user.id}
  //   />
  // }

  render() {
    const {isLoading} = this.state;
    return (
      <div className="App">
        <div>
          <nav>
            <ul>
              <li>Notiifications</li>
              <li>Messeges</li>
              <li>Saved</li>
            </ul>
            <div><img src="#" alt="user-avatar" /></div>
          </nav>
        </div>

        <h1>Scripthub</h1>

        <div>
          <img src="public/img/neon-lights.png" />
        </div>

        <div>{JSON.stringify(this.state.users)}</div>
        <div>{BASE_URL}</div>

        <UserList
          users={this.state.users}
        />
      </div>
    );
  }
}

export default App;
