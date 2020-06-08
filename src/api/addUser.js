import axios from 'axios';
import isEmpty from 'lodash/isEmpty';

import { API_URL, subUrl } from 'Consts/apiUrl';

const addUser = (name, surname, password, email) => {
  const userData = JSON.parse(localStorage.getItem('react-redux-user-data'));
  const userToken = !isEmpty(userData) && userData.data.id;

  return axios.post(
    `${API_URL}/${subUrl}/users`,

    { name, surname, password, email },

    {
      headers: { Authorization: userToken }
    }
  );
}

export default addUser;
