import axios from 'axios';
import isEmpty from 'lodash/isEmpty';

import API_URL from 'Consts/apiUrl';

const getUserData = id => {
  const userData = JSON.parse(localStorage.getItem('react-redux-user-data'));
  const userToken = !isEmpty(userData) && userData.data.id;

  return axios.get(
    `${API_URL}/users/${id}`,
    {
      headers: { Authorization: userToken }
    }
  );
};

export default getUserData;
