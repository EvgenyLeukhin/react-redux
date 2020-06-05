import axios from 'axios';
import isEmpty from 'lodash/isEmpty';
import {
  PROFILES_LIST, START, SUCCESS, ERROR, FETCH,
} from 'Store/types';

import { API_URL, subUrl } from 'Consts/apiUrl';

// request
export const fetchProfiles = () => {
  const userData = JSON.parse(localStorage.getItem('react-redux-user-data'));
  const userToken = !isEmpty(userData) && userData.data.id;

  return (dispatch) => {
    dispatch(fetchProfilessBegin());

    return axios.get(
      `${API_URL}/${subUrl}/users/searchExtra`,
      {
        params: {
          filter: { order: 'id DESC' }
        },
        headers: { Authorization: userToken }
      }
    )
    .then(res    => dispatch(fetchProfilessSuccess(res.data)))
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

const fetchProfilessBegin = () => ({
  type: FETCH + PROFILES_LIST + START
});

const fetchProfilessSuccess = (profiles) => ({
  type: FETCH + PROFILES_LIST + SUCCESS,
  payload: { profiles },
});

const fetchProfilesError = (error) => ({
  type: FETCH + PROFILES_LIST + ERROR,
  payload: { error },
});
