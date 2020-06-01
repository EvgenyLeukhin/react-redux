import axios from 'axios';

import { API_URL, subUrl } from 'Api/apiUrl';


const uploadLogo = (formData, id) => {
  const token = JSON.parse(localStorage.getItem('react-redux-user-data')).id;

  return axios.post(
    `${API_URL}/${subUrl}/users/${id}/uploadImage`,

    formData,

    {
      headers: { Authorization: token }
    }
  );
}

export default uploadLogo;
