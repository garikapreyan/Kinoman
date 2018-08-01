import React, { Component } from 'react';
import injectSheet from 'react-jss';
import { Link } from 'react-router-dom';

import styles from './styles';
import {setItem} from "../../localStorage";

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.handleLogOutSubmit = this.handleLogOutSubmit.bind(this);
  }

  handleLogOutSubmit() {
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
        <Link to={'/movies/popular'} className="navbar-brand">KINOMAN</Link>
        <div className={`${classes.searchBar} input-group ml-auto pr-5`}>
          <input type="text" className="form-control" placeholder="Search"
                 aria-label="Recipient's username" aria-describedby="basic-addon2"/>
          <div className="input-group-append">
            <button className="btn btn-outline-none btn-dark" type="button">Search</button>
          </div>
        </div>
        <button className={`btn btn-outline-none btn-dark`} onClick={this.handleLogOutSubmit}>Log Out</button>
      </nav>
    );
  }
}

export default injectSheet(styles)(NavBar);