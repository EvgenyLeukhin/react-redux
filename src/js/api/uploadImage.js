import axios from 'axios';
import isEmpty from 'lodash/isEmpty';

import { API_URL, subUrl } from 'Consts/apiUrl';


const uploadImage = (formData, id) => {
  const userData = JSON.parse(localStorage.getItem('react-redux-user-data'));
  const userToken = !isEmpty(userData) && userData.data.id;

  return axios.post(
    `${API_URL}/${subUrl}/users/${id}/uploadImage`,

    formData,

    {
      headers: { Authorization: userToken }
    }
  );
}

export default uploadImage;
