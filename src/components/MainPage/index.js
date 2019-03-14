import React, {Component, Fragment} from 'react';

import NavBar from '../../containers/NavBar';
import Movies from '../../containers/Movies';

class MainPage extends Component {
  render() {
    return (
      <Fragment>
        <NavBar history={this.props.history}/>
        <Movies/>
      </Fragment>
    );
  }
}

export default MainPage;