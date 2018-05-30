import React, { Component } from 'react';

class UserDetail extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="user-details">
        <h2>{this.props.first_name}{this.props.last_name}</h2>
        <p>{this.props.email}</p>
        <p>{this.props.phone_number}</p>
      </div>
    );
  }
}

export default UserDetail;
