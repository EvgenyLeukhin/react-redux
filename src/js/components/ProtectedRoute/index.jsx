import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { userToken } from 'Consts/userData';

import Layout from 'Layout';

const ProtectedRoute = ({ component: Component, ...rest }) => {
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
