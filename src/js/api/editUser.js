import axios from 'axios';
import { API_URL, subUrl } from 'Api/apiUrl';

const editUser = state => {
  const token = JSON.parse(localStorage.getItem('react-redux-user-data')).id;
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
      headers: { Authorization: token }
    }
  );
}

export default editUser;
