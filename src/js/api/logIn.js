import axios from 'axios';

import { API_URL, subUrl } from 'Consts/apiUrl';

const logIn = (email, password) => {
  return axios.post(
    `${API_URL}/${subUrl}/users/login?include=user`,
    { email, password },
  );
}

export default logIn;
