import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Product from './Product';
import UserDetail from './UserDetail';
import UserList from './UserList';
import ProductTable from './ProductTable';
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

  // render() {
  //   const UsersList = users => (
  //     <div>
  //       {users.map(user => (
  //         <div className="user" key={user.user_id}>{user.first_name}</div>
  //       ))}
  //     </div>
  //   )
  //   return (
  //     <div className="App">
  //       <div>
  //         <nav>
  //           <ul>
  //             <li>Notiifications</li>
  //             <li>Messeges</li>
  //             <li>Saved</li>
  //           </ul>
  //           <div><img src="#" alt="user-avatar" /></div>
  //         </nav>
  //       </div>
  //
  //       <h1>Scripthub</h1>
  //
  //       <div>
  //         <img src="public/img/neon-lights.png" />
  //       </div>
  //
  //       {/* <div>{JSON.stringify(this.state.users)}</div> */}
  //       <div>{BASE_URL}</div>
  //
  //       {/* <UserList
  //         users={this.state.users}
  //       /> */}
  //       <UsersList />
  //     </div>
  //   );
  // }

  renderUsers() {
    // this.state.users =  JSON.stringify(this.state.users)
    return this.state.users.map(user => {
        <tr key={user.user_id}>
          <td>{user.user_id}</td>
          <td>{user.first_name}</td>
          <td>{user.last_name}</td>
          <td>{user.email}</td>
        </tr>
    })
  }

  render() {
    return (
      <div className="container">
        <ProductTable
          products={this.state.products}
        />
      </div>
    )
  }
}

export default App;
