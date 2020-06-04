import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

class ProfileShow extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>React-Redux | Show Profile</title>
        </Helmet>

        <h1>Show profile</h1>
      </div>
    )
  }
}

export default ProfileShow;
