import { combineReducers } from 'redux';

import reduxTestReducer    from 'Routes/ReduxTest/store/reduxTestReducer';
import profilesListReducer from 'Routes/ProfilesList/store/profilesListReducer';
import profileShowReducer  from 'Routes/ProfileShow/store/profileShowReducer';

export default combineReducers({
  reduxTest:    reduxTestReducer,
  profilesList: profilesListReducer,
  profileShow:  profileShowReducer,
});