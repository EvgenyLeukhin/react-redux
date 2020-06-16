// DO NOT WORK FOR REQUESTS !!!

import isEmpty from 'lodash/isEmpty';

const userData  = JSON.parse(localStorage.getItem('react-redux-user-data'));
const userToken = !isEmpty(userData) && userData.data.id;
const userName  = !isEmpty(userData) && `${userData.data.user.name} ${userData.data.user.surname}`;
const userImg   = !isEmpty(userData) && userData.data.user.image.url;
const userId    = !isEmpty(userData) && userData.data.userId;

export {
  userData,
  userToken,
  userName,
  userImg,
  userId,
};
