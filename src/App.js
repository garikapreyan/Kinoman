import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
} from "react-router-dom";
import { connect } from 'react-redux';

import { getItem } from './localStorage';
import Authorization from "./containers/Authorization";
import MainPage from "./containers/MainPage";
import MoviePage from "./containers/MoviePage";

class App extends Component {
  render() {
   const localIsAuth = getItem().isAuth;
    const { isAuth } =this.props;
    return (
      <Router>
        <div>
          <Route path='/movies/popular' component={MainPage}/>
          <Route path='/login' component={Authorization}/>
          <Route path={`/movies/movie/:id`} component={MoviePage}/>
          {localIsAuth || isAuth ? <Redirect to='/movies/popular'/> : <Redirect to='/login'/>}
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  const { isAuth } = state.LogInLogOut;
  return {
    isAuth
  };
};

export default connect(mapStateToProps)(App);
