import React, { Component } from 'react';
import PropTypes from 'prop-types';
import isEmail from 'validator/lib/isEmail';

module.exports = class extends Component {
  static displayName = './components/User.jsx';

  // propTypes aligns the data we expect to get from Redux:
  static propTypes= {
    users: propTypes.array.isRequired,
    isLoading: propTypes.bool.isRequired,
    saveStatus: propTypes.string.isRequired,
    fields: propTypes.object,
    onSubmit: propTypes.func.isRequired
  };// end of propTypes

  // The state:
  state = {
    fields: this.props.fields || {
      user_id: '',
      gender: '',
      first_name: '',
      last_name: '',
      email: '',
      login_name: '',
      login_password: '',
      phone_number: '',
      repo_id: '',
      avatar: ''
    },
    fieldErrors: {}
  };// end of state

  getDerivedStateFromProps(update) {
    console.log('this.props.fields', this.props.fields, update);
    return {fields: update.fields};
  }// end of getDerivedStateFromProps()

  onFormSubmit = evt => {
    const user = this.state.fields;

    evt.preventDefault();

    if (this.validate()) return;

    this.props.onSubmit([...this.props.users, user]);
  }


  render() {
    if (this.props.isLoading) {
      return <img alt="loading" src="/img/loading.gif" />;
    }

    const dirty = Object.keys(this.state.fields).length;
    let status = this.props.saveStatus;
    if (status === 'SUCCESS' && dirty) status = 'READY';

    return (
      <div>
        <h1>Sign Up Sheet</h1>

        <form onSubmit={this.onFormSubmit}>
          <Field
            placeholder="First Name"
            name="first_name"
            value={this.state.fields.first_Pname}
            onChange={this.onInputChange}
            validate={val => (val ? false : 'Name Required')}
          />

          <form onSubmit={this.onFormSubmit}>
            <Field
              placeholder="Last Name"
              name="last_name"
              value={this.state.fields.last_name}
              onChange={this.onInputChange}
              validate={val => (val ? false : 'Name Required')}
            />

          <br />

          <form onSubmit={this.onFormSubmit}>
            <Field
              placeholder="Gender"
              name="gender"
              value={this.state.fields.name}
              onChange={this.onInputChange}
              validate={val => (val ? false : 'Name Required')}
            />

            <br />

          <Field
            placeholder="Email"
            name="email"
            value={this.state.fields.email}
            onChange={this.onInputChange}
            validate={val => (isEmail(val) ? false : 'Invalid Email')}
          />

          <br />

          {
            {
              SAVING: <input value="Saving..." type="submit" disabled />,
              SUCCESS: <input value="Saved!" type="submit" disabled />,
              ERROR: (
                <input
                  value="Save Failed - Retry?"
                  type="submit"
                  disabled={this.validate()}
                />
              ),
              READY: (
                <input
                  value="Submit"
                  type="submit"
                  disabled={this.validate()}
                />
              )
            }[status]
          }
        </form>

        <div>
          <h3>Users</h3>
          <ul>
            {this.props.people.map(({first_name, last_name, gender, email}, i) => (
              <li key={i}>{[first_name, last_name, gender, email].join(' - ')}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

}// end of module.exports
