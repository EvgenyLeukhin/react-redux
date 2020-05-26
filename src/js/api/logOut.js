import axios from 'axios';

import { API_URL, subUrl } from 'Consts/apiUrl';

const logOut = () => {
  const token = JSON.parse(localStorage.getItem('react-redux-user-data')).id;

  return axios.post(
    `${API_URL}/${subUrl}/users/logout`, {},
    {
      headers: { Authorization: token }
    }
  )
    .then(() => {
      // remove token
      localStorage.removeItem('react-redux-user-data');

      // TODO
    }).catch(error => {
      // remove token too
      console.log(error);
      localStorage.removeItem('react-redux-user-data');
    })
};

export default logOut;
