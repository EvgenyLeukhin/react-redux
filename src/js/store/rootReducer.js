import { combineReducers } from 'redux';

import reduxTestReducer from 'Routes/ReduxTest/store/reduxTestReducer';

export default combineReducers({
  reduxTest: reduxTestReducer,
});
