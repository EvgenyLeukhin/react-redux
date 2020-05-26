import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  // check for having user-token
  const userData = JSON.parse(localStorage.getItem('react-redux-user-data'));
  const userToken = userData && userData.data.id;

  return (
    <Route
      {...rest}
      // redirect to login form if user-token doesn t exist
      render={props => userToken ? <Component {...props} /> : <Redirect to="/login" /> }
    />
  )
}

export default ProtectedRoute;
