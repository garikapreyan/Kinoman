import React, { Component } from 'react';
import { connect } from 'react-redux';
// import {
//   fetchPosts,
// } from '../../actions/actions';

import MainPageComponent from '../../components/MainPage';
import {logOutAction} from "../../actions";

class MainPage extends Component {
  // componentDidMount() {
  //   const { movieFetching, postsByMovie, curPage } = this.props;
  //   movieFetching(postsByMovie, curPage);
  // }
  //
  // componentDidUpdate(prevProps) {
  //   const { movieFetching, postsByMovie, curPage } = this.props;
  //   if(prevProps.curPage !== curPage) {
  //     movieFetching(postsByMovie, curPage);
  //   }
  // }
  
  render() {
    const { posts } = this.props;
    return (
        <MainPageComponent posts={posts} logOut={this.props.logOut} />
    )
  }
}

function mapStateToProps(state) {
    const { movies, nextPrevPage, isMoviesFetching } = state;
    const { curPage } = nextPrevPage;
   return {
     movies,
     isMoviesFetching,
     curPage
   };
}

const mapDispatchToProps = dispatch => ({
  logOut: () => dispatch(logOutAction()),
  // movieFetching: (postsByMovie, curPage) => dispatch(fetchPosts(postsByMovie, curPage))
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);