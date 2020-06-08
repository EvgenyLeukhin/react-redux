import axios from 'axios';
import isEmpty from 'lodash/isEmpty';
import {
  PROFILES_LIST, START, SUCCESS, ERROR, FETCH,
} from 'Store/types';

import API_URL from 'Consts/apiUrl';

// request
export const fetchProfiles = () => {
  const userData = JSON.parse(localStorage.getItem('react-redux-user-data'));
  const userToken = !isEmpty(userData) && userData.data.id;

  return (dispatch) => {
    dispatch(fetchProfilesBegin());

    return axios.get(
      `${API_URL}/users/searchExtra`,
      {
        params: {
          filter: { order: 'id DESC' }
        },
        headers: { Authorization: userToken }
      }
    )
    .then(res    => dispatch(fetchProfilesSuccess(res.data)))
    .catch(error => {
      const { statusCode } = error.response.data.error;
      if (statusCode === 401) {
        localStorage.removeItem('react-redux-user-data');
        localStorage.removeItem('react-redux-user-data-fullname');
        localStorage.removeItem('react-redux-user-data-avatar');
        dispatch(fetchProfilesError(error.response.data.error));
        window.location.reload(); // later fix this
      } else {
        dispatch(fetchProfilesError(error.response.data.error));
      }
    });
  }
}

const fetchProfilesBegin = () => ({
  type: FETCH + PROFILES_LIST + START
});

const fetchProfilesSuccess = (profiles) => ({
  type: FETCH + PROFILES_LIST + SUCCESS,
  payload: { profiles },
});

const fetchProfilesError = (error) => ({
  type: FETCH + PROFILES_LIST + ERROR,
  payload: { error },
});
