import axios from 'axios';
import isEmpty from 'lodash/isEmpty';

import API_URL from 'Consts/apiUrl';

const editUser = (state, resData) => {
  const userData = JSON.parse(localStorage.getItem('react-redux-user-data'));
  const userToken = !isEmpty(userData) && userData.data.id;
  const {
    id, name, surname, email, job_title, emailVerified, status, image, emailSettings, emailJobApplication, emailMarketing,
  } = state;

  const {
    experience, skills, seniority_id, location_id, user_role_id, role_id, company_id,
  } = resData;

  return axios.patch(
    `${API_URL}/users/${id}`,

    {
      name,
      surname,
      email,
      job_title,
      emailVerified,
      admin: true,
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
};

export default editUser;
