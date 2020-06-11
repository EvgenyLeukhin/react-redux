import isEmpty from 'lodash/isEmpty';

const userData  = JSON.parse(localStorage.getItem('react-redux-user-data'));
const userToken = !isEmpty(userData) && userData.data.id;
const userName  = !isEmpty(userData) && `${userData.data.user.name} ${userData.data.user.surname}`;
const userImg   = !isEmpty(userData) && userData.data.user.image.url;

export {
  userData,
  userToken,
  userName,
  userImg,
};
