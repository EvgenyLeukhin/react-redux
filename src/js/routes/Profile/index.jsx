import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Table } from 'reactstrap';

import getUserData from 'Api/getUserData';


class Profile extends Component {
  state = {
    loading: false,
    userData: {}
  }

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
      this.setState({ loading: false });
      console.log(error);
    })
  }

  render() {
    const { userData, loading } = this.state;
    // console.log(userData);

    return (
      <>
        <Helmet>
          <title>React-Redux | Profile</title>
        </Helmet>

        <h1>User profile</h1>
        {
          loading ? 'Loading...' : (
            <Table
              className="table-danger"
              bordered
              striped
              hover
              responsive
            >
              <tbody>
                <tr>
                  <td><b>Id</b></td>
                  <td>{userData?.id}</td>
                </tr>
                <tr>
                  <td><b>Name</b></td>
                  <td>{userData?.name}</td>
                </tr>
                <tr>
                  <td><b>Surname</b></td>
                  <td>{userData?.surname}</td>
                </tr>
                <tr>
                  <td><b>Email</b></td>
                  <td>{userData?.email}</td>
                </tr>
                <tr>
                  <td><b>City</b></td>
                  <td>{userData.location?.name || ''}</td>
                </tr>
                <tr>
                  <td><b>Countty</b></td>
                  <td>{userData.location?.alias_region || ''}</td>
                </tr>
                <tr>
                  <td><b>Job title</b></td>
                  <td>{userData?.job_title}</td>
                </tr>
                <tr>
                  <td><b>Created</b></td>
                  <td>{userData.created}</td>
                </tr>
              </tbody>
            </Table>
          )
        }
      </>
    )
  }
}

export default Profile;
