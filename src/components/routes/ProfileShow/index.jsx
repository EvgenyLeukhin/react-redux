// ADD REDUX TO HOC
import { connect } from 'react-redux';
import ProfileShow from './page';

// IMPORT ACTIONS
import fetchUserData from './store/profileShowActions';

import './styles.scss';

// GET DATA FROME THE STORE
const mapStateToProps = ({ profileShow }) => {
  const { userData, loading, error } = profileShow;
  return { userData, loading, error };
};

// mapStateToProps, mapDispatchToProps
export default connect(mapStateToProps, { fetchUserData })(ProfileShow);
