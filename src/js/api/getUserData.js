import axios from 'axios';

import { API_URL, subUrl } from 'Api/apiUrl';

const getUserData = id => {
  const userData = JSON.parse(localStorage.getItem('react-redux-user-data'));
  const userToken = userData && userData.data.id;

  return axios.get(
    `${API_URL}/${subUrl}/users/${id}`,
    {
      headers: { Authorization: userToken }
    }
  )
}

export default getUserData;
