import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import isLogin from 'Utils/IsLogIn';

const NotFoundPage = () => {
  // check for login
  if (!isLogin) {
    return <Redirect to='/login' />;
  }

  return (
    <>
      <Helmet>
        <title>React-Redux | 404 page</title>
      </Helmet>

      <h1>404 - Not Found Page</h1>

      <p>
        <Link to="/">Go to Home </Link>
      </p>
    </>
  )
}

export default NotFoundPage;
