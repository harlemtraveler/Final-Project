import React, { Component } from 'react';
import User from './User';


export default function TestUserList(props) {
  <div className="user-list">
    {(props.users.length === 0) ?
        <p>No users listed. (Add a User)</p> :
        props.users.map(user =>
          <User key={user.user_id} {...user} />
        )
    }
  </div>
}
// export default TestUserList;
