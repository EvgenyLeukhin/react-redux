// ADD REDUX TO HOC
import { connect } from 'react-redux';
import ProfileShow from './page';

// IMPORT ACTIONS
import fetchUserData from './store/profileShowActions';

import './styles.scss';

// GET DATA FROME THE STORE
const mapStateToProps = store => {
  return {
    userData: store.profileShow.userData,
    loading:  store.profileShow.loading,
    error:    store.profileShow.error,
  };
};

// mapStateToProps, mapDispatchToProps
export default connect(mapStateToProps, { fetchUserData })(ProfileShow);
