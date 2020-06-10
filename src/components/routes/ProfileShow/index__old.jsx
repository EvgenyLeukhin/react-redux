import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Table, Button } from 'reactstrap';
import PT from 'prop-types';

import getUserData from 'Api/getUserData';

import './styles.scss';


class ProfileShow extends Component {
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
      });
    });
  }

  goToEdit = () => {
    const { history } = this.props;
    history.push('/profile-edit');
  }

  render() {
    const { userData, loading } = this.state;

    return (
      <div className="user-show-page">
        <Helmet>
          <title>React-Redux | Show profile</title>
        </Helmet>

        <h1>Show user profile</h1>
        {
          loading ? 'Loading...' : (
            <>
              <div className="avatar-container">
                <img
                  width="100"
                  height="100"
                  style={{ borderRadius: '50%' }}
                  src={userData?.image?.url} alt={userData?.image?.url}
                />
                <h4>{`${userData?.name} ${userData?.surname}`}</h4>
                <Button color="primary" onClick={this.goToEdit}>Edit</Button>
              </div>

              <hr/>

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
                    <td><b>Email verified</b></td>
                    <td>{userData?.emailVerified ? 'Yes' : 'No'}</td>
                  </tr>
                  <tr>
                    <td><b>Email job application</b></td>
                    <td>{userData?.emailJobApplication ? 'Yes' : 'No'}</td>
                  </tr>
                  <tr>
                    <td><b>Email marketing</b></td>
                    <td>{userData?.emailMarketing ? 'Yes' : 'No'}</td>
                  </tr>
                  <tr>
                    <td><b>Email settings</b></td>
                    <td>{userData?.emailSettings ? 'Yes' : 'No'}</td>
                  </tr>
                  <tr>
                    <td><b>Created</b></td>
                    <td>{userData?.created}</td>
                  </tr>
                  <tr>
                    <td><b>Modified</b></td>
                    <td>{userData?.modified}</td>
                  </tr>
                  <tr>
                    <td><b>Last login</b></td>
                    <td>{userData?.lastLogin}</td>
                  </tr>
                </tbody>
              </Table>
            </>
          )
        }
      </div>
    );
  }
}

ProfileShow.propTypes = {
  history: PT.object,
};

export default ProfileShow;
