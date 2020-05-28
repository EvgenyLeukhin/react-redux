const userData = JSON.parse(localStorage.getItem('react-redux-user-data')) || {};

const userToken = userData && userData.data.id;
const userName = userData && `${userData.data.user.name} ${userData.data.user.surname}`;
const userImg = userData && userData.data.user.image.url;

export {
  userData, userToken, userName, userImg,
}
