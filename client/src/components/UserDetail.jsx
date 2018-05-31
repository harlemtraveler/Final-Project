import React, { Component } from 'react';

export default function UserDetail(props) {
  return (
    <div className="user-details">
      <h2>{props.user.first_name} {props.user.last_name}</h2>
      <p>{props.user.email}</p>
      <p>{props.user.phone_number}</p>
    </div>
  );
}

// export default UserDetail;

// const UserDetail = props => {
//   return (
//     <div>
//       {/* <h1> {props.detail.first_name} </h1> */}
//       <h1>Hey you</h1>
//     </div>
//   )
// }
// export default UserDetail;
