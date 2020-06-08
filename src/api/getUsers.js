import axios from 'axios';
import isEmpty from 'lodash/isEmpty';

import API_URL from 'Consts/apiUrl';

const getUsers = () => {
  const userData = JSON.parse(localStorage.getItem('react-redux-user-data'));
  const userToken = !isEmpty(userData) && userData.data.id;

  return axios.get(
    `${API_URL}/users/searchExtra`,
    {
      params: {
        filter: {
          order: 'id DESC',
        }
      },
      headers: { Authorization: userToken }
    }
  )
}

export default getUsers;
