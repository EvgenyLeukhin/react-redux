import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import isEmpty from 'lodash/isEmpty';

import Layout from 'Layout';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const userData = JSON.parse(localStorage.getItem('react-redux-user-data'));
  const userToken = !isEmpty(userData) && userData.data.id;

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
