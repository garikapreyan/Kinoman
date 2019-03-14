import React, {Component, Fragment} from 'react';
import injectSheet from 'react-jss';

import styles from './styles';

import Loader from '../Loader';
import Movie from '../../containers/Movie';
import NavBar from "../../containers/NavBar";

class Favourites extends Component {
  componentDidMount() {
    const { getFavouriteMovies, favourites } = this.props;
    getFavouriteMovies(favourites);
  }

  render() {
    const { classes, favouriteMovies, isFavouritesFetching } = this.props;
    return (
      <Fragment>
        <NavBar history={this.props.history}/>
        <div className={classes.popular}>
          {
            !isFavouritesFetching ? (
              favouriteMovies.length ? (
                favouriteMovies.map((movie, i) =>
                  <Movie movie={movie} key={i}/>
                )
              ) : (
                <h3 className={classes.noMovies}>There aren`t favourite movies!</h3>
              )
            ) : (
              <Loader/>
            )
          }
        </div>
      </Fragment>
    );
  }
}

export default injectSheet(styles)(Favourites);