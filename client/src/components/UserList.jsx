import React, { Component } from 'react';
import UserDetail from './UserDetail';

// class UserList extends Component {
//   constructor(props) {
//     super(props);
//
//     const UserList = this.props.users.map((user) => (
//       <UserDetail
//         first_name={user.first_name}
//         last_name={user.last_name}
//         email={user.email}
//         phone_number={user.phone_number}
//       />
//     ));
//   }
//   render() {
//     return (
//       <div className="App">
//         <UserList />
//       </div>
//     );
//   }
// }

// const UserList = props => {
//   // const userlist = props.users.map((user) => {
//   //     console.log('user')
//   //     <UserDetail detail={user} />
//   // })
//   return (
//     <div>
//       <h1> i am userslist </h1>
//       <UserDetail detail={props.user} />
//     </div>
//   )
// }
// export default UserList;
export default function UserList(props) {
  return (
    <div>
      {
        props.users.map(user => (
          <UserDetail
            user={user}
          />
        ))
      }
    </div>
  );
}
