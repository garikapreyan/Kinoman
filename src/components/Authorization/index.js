import React, { Component } from 'react';

import Login from "./Login";
import { setItem } from '../../localStorage';

class Authorization extends Component {
  constructor(props) {
    super(props);

    this.submit = this.submit.bind(this);
  }

  submit(values) {

    const { username, password } = values;
    if(username !== undefined && password !== undefined) {
      const newName = username.trim();
      const newPass = password.trim();

      if (newName === '' || newPass === '') {
        return null;
      }

      const currentUser = {
        username: username,
        password: password,
        isAuth: true
      };

      this.props.values(currentUser);
      setItem(currentUser);
    }
  }

  render() {
    return (
        <Login
          onSubmit={this.submit}
        />
    );
  }
}

export default Authorization;