import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Alert, Table, Button } from 'reactstrap';
import { Redirect } from 'react-router-dom';
import PT from 'prop-types';

import isEmpty from 'lodash/isEmpty';


class ProfileShow extends Component {
  componentDidMount() { this.props.fetchUserData(); }

  goToEdit = () => {
    const { history } = this.props;
    history.push('/profile/edit');
  }

  render() {
    const { userData, loading, error } = this.props;

    // redirect to /login if 401 error
    if (error.statusCode === 401) return <Redirect to='/login' />;

    return (
      <div className="user-show-page">
        <Helmet>
          <title>React-Redux | Show profile</title>
        </Helmet>

        <h1>Show user profile</h1>

        <Alert color="danger" isOpen={error && error.isAxiosError}>
          {!isEmpty(error) && (`${error.status} - ${error.message}`)}
        </Alert>

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

              <hr />

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
  fetchUserData: PT.func,
  userData: PT.objectOf(PT.any),
  loading: PT.bool,
  error: PT.bool,
  history: PT.object,
};

export default ProfileShow;
