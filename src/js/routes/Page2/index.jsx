import React from 'react';
import { Redirect } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import isLogin from 'Utils/IsLogIn';

const Page2 = () => {
  // check for login
  if (!isLogin) {
    return <Redirect to='/login' />;
  }

  return (
    <>
      <Helmet>
        <title>React-Redux | Page 2</title>
      </Helmet>

      <h1>Page 2</h1>
    </>
  )
}

export default Page2;
