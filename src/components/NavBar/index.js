import React, { Component } from 'react';
import injectSheet from 'react-jss';
import { Link } from 'react-router-dom';

import styles from './styles';
import {setItem} from '../../localStorage';

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: ''
    };

    this.handleLogOutSubmit = this.handleLogOutSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      query: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    if(this.state.query)
      this.props.history.push(`/Kinoman/search/${this.state.query}`);
  }

  handleLogOutSubmit() {
    console.log('fdjsf');
    const curUser = {
      username: '',
      password: '',
      isAuth: false
    };
    setItem(curUser);
    this.props.logOut();
  }

  render() {
    const { classes } = this.props;
    return (
      <nav className={`navbar fixed-top navbar-dark bg-dark`}>
        <Link to={'/Kinoman/movies/popular'} className={'navbar-brand'}>KINOMAN</Link>
        <Link to={'/Kinoman/favourites'} className={`${classes.navbarItem} ${classes.floatLeft}`}>Favourites</Link>
        <form onSubmit={this.handleSubmit} className={classes.form}>
          <input className={classes.input} placeholder={'Search'} onChange={this.handleChange}/>
        </form>
        <Link to={'/Kinoman/login'} className={classes.navbarItem} onClick={this.handleLogOutSubmit}>Log Out</Link>
      </nav>
    );
  }
}

export default injectSheet(styles)(NavBar);