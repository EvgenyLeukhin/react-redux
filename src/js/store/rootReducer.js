import { combineReducers } from 'redux';

import profilesListReducer from 'Routes/Profiles/store/profilesListReducer';
import profileShowReducer  from 'Routes/ProfileShow/store/profileShowReducer';

export default combineReducers({
  profileList: profilesListReducer,
  profileShow: profileShowReducer,
});
