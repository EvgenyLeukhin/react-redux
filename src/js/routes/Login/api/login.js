import axios from 'axios';

import { API_URL, subUrl } from 'Api/apiUrl';

const loginRequest = ({ email, password }) => {
  return axios.get(
    `${API_URL}/${subUrl}/users/login?include=user`,
    { email, password }
  )
    .then(res => res.data)
}

export default loginRequest;
