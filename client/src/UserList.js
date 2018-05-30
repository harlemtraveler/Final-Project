import React, { Component } from 'react';
import UserDetail from './UserDetail';

class UserList extends Component {
  constructor(props) {
    super(props);

    const UserList = this.props.users.map((user) => (
      <UserDetail
        first_name={user.first_name}
        last_name={user.last_name}
        email={user.email}
        phone_number={user.phone_number}
      />
    ));
  }
  render() {
    return (
      <div className="App">
        <UserList />
      </div>
    );
  }
}

export default UserList;
