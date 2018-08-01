import { connect } from 'react-redux';

import Authorization from '../../components/Authorization'
import {logInAction} from "../../actions";


const mapDispatchToProps = dispatch => ({
  values: (info) => dispatch(logInAction(info))
});

export default connect(undefined, mapDispatchToProps)(Authorization);