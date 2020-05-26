import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import Layout from 'Layout';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  // check for having user-token
  const userData = JSON.parse(localStorage.getItem('react-redux-user-data'));
  const userToken = userData && userData.data.id;

  return (
    <Route
      {...rest}

      // redirect to login form if user-token doesn t exist
      render={props => {
        if (userToken) {
          return (
            <Layout>
              <Component {...props} />
            </Layout>
          )
        } else return <Redirect to="/login" />
      }}
    />
  )
}

export default ProtectedRoute;
