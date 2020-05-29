import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Button } from 'reactstrap';

import getUserData from 'Api/getUserData';

class ProfileEdit extends Component {
  state = {
    loading: false,
    error: false,
    errorText: '',
    userData: {},
  }

  deleteClick = () => alert('Delete request');

  componentDidMount() {
    const userData = JSON.parse(localStorage.getItem('react-redux-user-data'));
    const userId = userData?.data?.userId;

    this.setState({ loading: true });

    // get user data request
    getUserData(userId).then(res => {
      this.setState({
        loading: false,
        userData: res.data
      })
    }).catch(error => {
      console.log(error);

      // 401 -> redirect to login
      if (error.response.status === 401) {
        localStorage.removeItem('react-redux-user-data');
        this.props.history.push('/login');

        // show error alert
      } else {
        this.setState({ loading: false, error: true, errorText: error });
      }
    })
  }

  render() {
    return (
      <div className="user-profile-edit">
        <Helmet>
          <title>React-Redux | Profile Edit</title>
        </Helmet>

        <div className="title-container">
          <h1>Edit profile</h1>
          <Button color="danger" onClick={this.deleteClick}>Delete user</Button>
        </div>
      </div>
    )
  }
}

export default ProfileEdit;
