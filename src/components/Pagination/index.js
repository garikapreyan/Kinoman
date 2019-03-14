import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import injectSheet from 'react-jss';

import styles from './styles';
import {nextPageAction, prevPageAction} from "../../actions";

class Pagination extends Component {
  constructor(props) {
    super(props);

    this.handlePrevClick = this.handlePrevClick.bind(this);
    this.handleNextClick = this.handleNextClick.bind(this);
  }

  handlePrevClick() {
    let { curPage } = this.props;
    if(curPage > 1)
      this.props.prevPage(--curPage);
  }

  handleNextClick() {
    let { curPage } = this.props;
    if(curPage < 994)
      this.props.nextPage(++curPage);
  }

  render() {
    const { classes, curPage } = this.props;
    return (
      <ul className={`${classes.pages} pagination`}>
          <li className={`${classes.movie} page-item`}>
            <Link to={`/Kinoman/movies/popular?page=${curPage === 1 ? curPage : curPage-1}`} className={`btn btn-outline-none btn-dark`} onClick={this.handlePrevClick}>Previous</Link>
          </li>
        <li className='page-item'>
          <Link to={`/Kinoman/movies/popular?page=${curPage+1}`} className={`${classes.movie} btn btn-outline-none btn-dark`} onClick={this.handleNextClick}>Next</Link>
        </li>
      </ul>);
  }
}

const mapStateToProps = state => {
  return {
    curPage: state.nextPrevPage.curPage
  };
};

const mapDispatchToProps = dispatch => ({
  nextPage: (page) => {dispatch(nextPageAction(page))},
  prevPage: (page) => {dispatch(prevPageAction(page))}
});

export default connect(mapStateToProps, mapDispatchToProps)(injectSheet(styles)(Pagination));