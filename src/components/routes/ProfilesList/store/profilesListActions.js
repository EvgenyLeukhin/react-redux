import {
  PROFILES_LIST, START, SUCCESS, ERROR, FETCH,
} from 'Store/types';

import request from 'Utils/request';

const requestParams = {
  filter: { order: 'id DESC' }
};

// request
const fetchProfiles = () => {
  return (dispatch) => {
    dispatch(fetchProfilesBegin());

    return request('users/searchExtra', requestParams)
      .then(res => dispatch(fetchProfilesSuccess(res)))
      .catch(error => dispatch(fetchProfilesError(error)));
  };
};

const fetchProfilesBegin = () => ({
  type: FETCH + PROFILES_LIST + START
});

const fetchProfilesSuccess = profiles => ({
  type: FETCH + PROFILES_LIST + SUCCESS,
  payload: profiles.data,
});

const fetchProfilesError = error => ({
  type: FETCH + PROFILES_LIST + ERROR,
  payload: error.response,
});

export default fetchProfiles;
