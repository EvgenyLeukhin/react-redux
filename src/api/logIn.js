import axios from 'axios';

import API_URL from 'Consts/apiUrl';

const logIn = (email, password) => {
  return axios.post(
    `${API_URL}/users/login?include=user`,
    { email, password },
  );
}

export default logIn;
