import axios from 'axios';

import { API_URL, subUrl } from 'Api/apiUrl';

const deleteUser = id => {
  const token = JSON.parse(localStorage.getItem('react-redux-user-data')).id;

  return axios.delete(
    `${API_URL}/${subUrl}/users/${id}`,
    {
      headers: { Authorization: token }
    }
  )
};

export default deleteUser;
