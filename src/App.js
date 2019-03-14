import React, { Component, Fragment} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
} from "react-router-dom";
import { connect } from 'react-redux';

import { getItem } from './localStorage';
import Authorization from "./containers/Authorization";
import MainPage from "./components/MainPage";
import MoviePage from "./containers/MoviePage";
import Favourites from './containers/Favourites';
import Search from './containers/Search';

class App extends Component {
  render() {
   const localIsAuth = getItem().isAuth;
    const { isAuth } =this.props;
    return (
      <Router>
        <Fragment>
          <Route path='/Kinoman/movies/popular' component={MainPage}/>
          <Route path='/Kinoman/login' component={Authorization}/>
          <Route path={`/Kinoman/movie/:id`} component={MoviePage}/>
          <Route path={'/Kinoman/favourites'} component={Favourites} />
          <Route path={'/Kinoman/search/:query'} component={Search}/>
          {localIsAuth || isAuth ? <Redirect to='/Kinoman/movies/popular'/> : <Redirect to='/Kinoman/login'/>}
        </Fragment>
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
