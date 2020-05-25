import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import isLogin from 'Utils/IsLogIn';

class Login extends Component {
  render() {
    if (isLogin) {
      return <Redirect to='/' />;
    }

    return (
      <div>
        <Helmet>
          <title>React-Redux | Login page</title>
        </Helmet>

        <h1>Login Page</h1>
      </div>
    )
  }
}

export default Login;
