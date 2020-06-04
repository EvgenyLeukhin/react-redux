import axios from 'axios';
import isEmpty from 'lodash/isEmpty';

import { API_URL, subUrl } from 'Consts/apiUrl';

const getUsers = () => {
  const userData = JSON.parse(localStorage.getItem('react-redux-user-data'));
  const userToken = !isEmpty(userData) && userData.data.id;

  return axios.get(
    `${API_URL}/${subUrl}/users/searchExtra`,
    {
      headers: { Authorization: userToken }
    }
  )
}

export default getUsers;
