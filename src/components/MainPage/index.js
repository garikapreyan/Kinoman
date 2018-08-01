import React, { Component } from 'react';

import NavBar from '../../containers/NavBar';
import Movies from '../Movies';

class MainPage extends Component {
  render() {
    const { posts } = this.props;
    return (
      <div>
        <NavBar/>
        <Movies posts={posts}/>
      </div>
    );
  }
}

export default MainPage;