import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Alert, Table } from 'reactstrap';

import getUserData from 'Api/getUserData';

import './styles.scss';


class Profile extends Component {
  state = {
    loading: false,
    error: false,
    errorText: '',
    userData: {},
  }

  closeAlert = () => this.setState({ error: false });

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
    const { userData, loading, error, errorText } = this.state;
    const { id, name, surname, email, location, job_title, created } = userData;

    return (
      <div className="user-profile">
        <Helmet>
          <title>React-Redux | Profile</title>
        </Helmet>

        {
          <Alert
            color="danger"
            isOpen={error}
            toggle={this.closeAlert}
          >
            {`${errorText}` || ''}
          </Alert>
        }

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
                  <td>{id || ''}</td>
                </tr>
                <tr>
                  <td><b>Name</b></td>
                  <td>{name || ''}</td>
                </tr>
                <tr>
                  <td><b>Surname</b></td>
                  <td>{surname || ''}</td>
                </tr>
                <tr>
                  <td><b>Email</b></td>
                  <td>{email || ''}</td>
                </tr>
                <tr>
                  <td><b>City</b></td>
                  <td>{location?.name || ''}</td>
                </tr>
                <tr>
                  <td><b>Countty</b></td>
                  <td>{location?.alias_region || ''}</td>
                </tr>
                <tr>
                  <td><b>Job title</b></td>
                  <td>{job_title || ''}</td>
                </tr>
                <tr>
                  <td><b>Created</b></td>
                  <td>{created || ''}</td>
                </tr>
              </tbody>
            </Table>
          )
        }
      </div>
    )
  }
}

export default Profile;
