import axios from 'axios';
import isEmpty from 'lodash/isEmpty';

import API_URL from 'Consts/apiUrl';

const request = (path, params) => {
  const userData = JSON.parse(localStorage.getItem('react-redux-user-data'));
  const userToken = !isEmpty(userData) && userData.data.id;

  return axios.get(
    `${API_URL}/${path}`,
    {
      headers: { Authorization: userToken },
      params
    }
  );
};

export default request;
