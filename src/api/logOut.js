import axios from 'axios';
import isEmpty from 'lodash/isEmpty';

import API_URL from 'Consts/apiUrl';

const logOut = () => {
  const userData = JSON.parse(localStorage.getItem('react-redux-user-data'));
  const userToken = !isEmpty(userData) && userData.data.id;

  return axios.post(
    `${API_URL}/users/logout`, {}, {
      headers: { Authorization: userToken }
    }
  ).then(() => {
    // remove user-data
    localStorage.removeItem('react-redux-user-data');
    localStorage.removeItem('react-redux-user-data-fullname');
    localStorage.removeItem('react-redux-user-data-avatar');
  });
};

export default logOut;
