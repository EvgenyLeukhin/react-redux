const clearStorage = () => {
  localStorage.removeItem('react-redux-user-data');
  localStorage.removeItem('react-redux-user-data-fullname');
  localStorage.removeItem('react-redux-user-data-avatar');
};

export default clearStorage;
