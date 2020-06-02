import axios from 'axios';
import isEmpty from 'lodash/isEmpty';
import { API_URL, subUrl } from 'Consts/apiUrl';

const editUser = state => {
  const userData = JSON.parse(localStorage.getItem('react-redux-user-data'));
  const userToken = !isEmpty(userData) && userData.data.id;

  const {
    id,
    name,
    surname,
    email,
    job_title,
    emailVerified,
    admin,
    status,
    experience,
    image,
    skills,
    emailSettings,
    emailJobApplication,
    emailMarketing,
    seniority_id,
    location_id,
    user_role_id,
    role_id,
    company_id,
  } = state;

  return axios.patch(
    `${API_URL}/${subUrl}/users/${id}`,

    {
      name,
      surname,
      email,
      job_title,
      emailVerified,
      admin,
      status,
      experience,
      image,
      skills,
      emailSettings,
      emailJobApplication,
      emailMarketing,
      seniority_id,
      location_id,
      user_role_id,
      role_id,
      company_id,
      modified: `${new Date().toISOString()}`,
    },

    {
      headers: { Authorization: userToken }
    }
  );
}

export default editUser;
