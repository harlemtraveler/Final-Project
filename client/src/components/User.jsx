import React, { Component } from 'react';

class User extends Component {
  // constructor(props) {
  //   super(props);
  //
  //   this.state = {
  //     product: [],
  //   }
  //}
  // componentDidMount() {
  //   this.fetchUser();
  // }

  // fetchUser() {
  //   fetch(`http:localhost:3001/users/${this.props.match.params.id}`)
  //   .then(resp => {
  //     if(!resp.ok) throw new Error('There was an error');
  //     return resp.json();
  //   })
  //   .then(data => {
  //     this.setState({
  //       user: data.contents
  //     })
  //   })
  // }

  render() {
    return (
      <div>
        {/* <p>This is a user component</p> */}
        {/* match.param is added via router to props */}
        {/* <p>This is the {this.props.match.params.users}.</p>
        <button onClick={
          () => {this.props.history.push('/')
          console.log(this.props.match)
          console.log(this.props.history)
        >Back to home</button> */}
      </div>
    );
  };
}

export default User;
