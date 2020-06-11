import axios from 'axios';
import isEmpty from 'lodash/isEmpty';

import clearStorage from 'Utils/clearStorage';

import API_URL from 'Consts/apiUrl';

const request = (path, params, history) => {
  const userData = JSON.parse(localStorage.getItem('react-redux-user-data'));
  const userToken = !isEmpty(userData) && userData.data.id;

  return axios.get(
    `${API_URL}/${path}`,
    {
      headers: { Authorization: userToken },
      params
    }
  ).catch(error => {
    const { statusCode } = error.response.data.error;

    if (statusCode === 401) {
      clearStorage();
      history.push('/login');
    } else {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  });
};

export default request;
