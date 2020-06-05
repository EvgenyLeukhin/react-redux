import { combineReducers } from 'redux';

import reduxTestReducer    from 'Routes/ReduxTest/store/reduxTestReducer';
import profilesListReducer from 'Routes/ProfilesList/store/profilesListReducer';

export default combineReducers({
  reduxTest:    reduxTestReducer,
  profilesList: profilesListReducer,
});
