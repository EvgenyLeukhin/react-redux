import {
  PROFILE_SHOW, START, SUCCESS, ERROR, FETCH,
} from 'Store/types';

import isEmpty from 'lodash/isEmpty';

import request from 'Utils/request';


// request
const fetchUserData = () => {
  return (dispatch) => {
    dispatch(fetchUserDataBegin());

    // get userId from localStorage
    const userData = JSON.parse(localStorage.getItem('react-redux-user-data'));
    const userId = !isEmpty(userData) && userData.data.userId;

    return request(`users/${userId}`)
      .then(res => dispatch(fetchUserDataSuccess(res)))
      .catch(error => dispatch(fetchUserDataError(error)));
  };
};

const fetchUserDataBegin = () => ({
  type: FETCH + PROFILE_SHOW + START,
});

const fetchUserDataSuccess = userData => ({
  type: FETCH + PROFILE_SHOW + SUCCESS,
  payload: userData.data,
});

const fetchUserDataError = error => ({
  type: FETCH + PROFILE_SHOW + ERROR,
  payload: error.response,
});

export default fetchUserData;
