import { connect } from 'react-redux';

import NavBar from '../../components/NavBar';
import { logOutAction } from "../../actions";

const mapDispatchToProps = dispatch => ({
  logOut: () => dispatch(logOutAction())
});

export default connect(undefined, mapDispatchToProps)(NavBar);