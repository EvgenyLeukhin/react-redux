import axios from 'axios';
import isEmpty from 'lodash/isEmpty';

import API_URL from 'Consts/apiUrl';

import clearStorage from 'Utils/clearStorage';

const logOut = () => {
  const userData = JSON.parse(localStorage.getItem('react-redux-user-data'));
  const userToken = !isEmpty(userData) && userData.data.id;

  return axios.post(
    `${API_URL}/users/logout`, {}, {
      headers: { Authorization: userToken }
    }
  ).then(() => {
    // remove user-data
    clearStorage();
  });
};

export default logOut;
