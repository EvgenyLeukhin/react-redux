import axios from 'axios';

import { API_URL, subUrl } from 'Api/apiUrl';

const logOut = () => {
  const userData = JSON.parse(localStorage.getItem('react-redux-user-data'));
  const userToken = userData && userData.data.id;

  return axios.post(
    `${API_URL}/${subUrl}/users/logout`, {}, {
      headers: { Authorization: userToken }
    }
  ).then(() => {
    // remove user-data
    localStorage.removeItem('react-redux-user-data');
  })
}

export default logOut;
