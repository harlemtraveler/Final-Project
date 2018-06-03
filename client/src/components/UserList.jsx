import React, { Component } from 'react';
import UserDetail from './UserDetail';
import PageTemplate from './partials/PageTemplate';

export default function UserList(props) {
  return (
    <div>
      <PageTemplate />
      <div className="userdetails-container">
        {
          props.users.map(user => (
            <UserDetail
              user={user}
            />
          ))
        }
      </div>
  </div>
  );
}
