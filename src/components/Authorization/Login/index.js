import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import injectSheet from 'react-jss';

import styles from './styles';

class Login extends Component {
  render() {
    const {classes, handleSubmit } = this.props;
    return (
      <form className={classes.root} onSubmit={handleSubmit}>
        <div className={`${classes.inputs} form-group`} style={{marginTop: "250px"}}>
          <label htmlFor="username">Username</label>
          <Field className={`form-control`} name='username' component='input' type='text' placeholder='Username'/>
        </div>
        <div className={`${classes.inputs} form-group`}>
          <label htmlFor="password">Password</label>
          <Field className={`form-control`} name='password' component='input' type='password' placeholder='Password'/>
        </div>
        <button className={`${classes.button} btn btn-dark`} type='submit'>LogIn</button>
      </form>
    )
  }
}

Login = reduxForm({
  form: 'loginForm'
})(Login);

export default injectSheet(styles)(Login);
