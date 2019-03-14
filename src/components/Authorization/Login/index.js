import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import injectSheet from 'react-jss';

import styles from './styles';

class Login extends Component {
  render() {
    const { classes, handleSubmit } = this.props;
    return (
      <form className={classes.root} onSubmit={handleSubmit}>
        <Field className={`${classes.inputs} form-control`} name='username' component='input' type='text' placeholder='Username'/>
        <Field className={`${classes.inputs} form-control`} name='password' component='input' type='password' placeholder='Password'/>
        <button className={`${classes.button} btn btn-dark`} type='submit'>LogIn</button>
      </form>
    )
  }
}

Login = reduxForm({
  form: 'loginForm'
})(Login);

export default injectSheet(styles)(Login);
