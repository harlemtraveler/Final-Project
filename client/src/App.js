import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Product from './Product';
const BASE_URL = process.env.REACT_APP_BASE_URL;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    //the url passed in the fetch below WON'T be hard coded
    //We need to make an environmental variable in .env file
    //that gets picked up in locally.
    fetch(`${BASE_URL}/users`)
      .then(resp => resp.json())
      .then(data => this.setState({
        users: data.users
      }));
  }

  render() {
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

        <Product />
      </div>
    );
  }
}

export default App;
