import axios from 'axios';
import isEmpty from 'lodash/isEmpty';
import {
  PROFILES_LIST, START, SUCCESS, ERROR, FETCH,
} from 'Store/types';

import API_URL from 'Consts/apiUrl';

import clearStorage from 'Utils/clearStorage';

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
          clearStorage();
          dispatch(fetchProfilesError(error.response.data.error));
        } else {
          dispatch(fetchProfilesError(error.response.data.error));
        }
      });
  };
};

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
