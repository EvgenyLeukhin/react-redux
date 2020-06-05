// ADD REDUX TO HOC
import { connect } from 'react-redux';
import ProfilesList from './page';

// IMPORT ACTIONS
import { fetchProfiles } from './store/profilesListActions';

// GET DATA FROME THE STORE
const mapStateToProps = store => {
  return {
    profiles: store.profilesList.profiles,
    loading:  store.profilesList.loading,
    error:    store.profilesList.error,
  };
};

// mapStateToProps, mapDispatchToProps
export default connect(mapStateToProps, { fetchProfiles })(ProfilesList);
