import axios from 'axios';
import isEmpty from 'lodash/isEmpty';
import {
  PROFILE_SHOW, START, SUCCESS, ERROR, FETCH,
} from 'Store/types';

import API_URL from 'Consts/apiUrl';

import clearStorage from 'Utils/clearStorage';

// request
const fetchUserData = () => {
  const userData = JSON.parse(localStorage.getItem('react-redux-user-data'));
  const userToken = !isEmpty(userData) && userData.data.id;
  const { userId } = !isEmpty(userData) && userData.data;

  return (dispatch) => {
    dispatch(fetchUserDataBegin());

    return axios.get(
      `${API_URL}/users/${userId}`,
      {
        headers: { Authorization: userToken }
      }
    )
      .then(res    => dispatch(fetchUserDataSuccess(res.data)))
      .catch(error => {
        const { statusCode } = error.response.data.error;
        if (statusCode === 401) {
          clearStorage();
          dispatch(fetchUserDataError(error.response.data.error));
        } else {
          dispatch(fetchUserDataError(error.response.data.error));
        }
      });
  };
};

const fetchUserDataBegin = () => ({
  type: FETCH + PROFILE_SHOW + START
});

const fetchUserDataSuccess = (userData) => ({
  type: FETCH + PROFILE_SHOW + SUCCESS,
  payload: { userData },
});

const fetchUserDataError = (error) => ({
  type: FETCH + PROFILE_SHOW + ERROR,
  payload: { error },
});

export default fetchUserData;
