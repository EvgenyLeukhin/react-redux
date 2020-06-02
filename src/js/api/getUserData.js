import axios from 'axios';
import isEmpty from 'lodash/isEmpty';

import { API_URL, subUrl } from 'Consts/apiUrl';

const getUserData = id => {
  const userData = JSON.parse(localStorage.getItem('react-redux-user-data'));
  const userToken = !isEmpty(userData) && userData.data.id;

  return axios.get(
    `${API_URL}/${subUrl}/users/${id}`,
    {
      headers: { Authorization: userToken }
    }
  )
}

export default getUserData;
