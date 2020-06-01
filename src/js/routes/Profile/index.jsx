import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Alert, Button } from 'reactstrap';

// API //
import getUserData from 'Api/getUserData';
import uploadImage from 'Api/uploadImage';
import editUser    from 'Api/editUser';
import deleteUser  from 'Api/deleteUser';

import UserForm from './form'

import './styles.scss';


class Profile extends Component {
  fileInputImage = React.createRef();

  state = {
    // UI
    loading: false, error: false, errorText: '',

    // fields
    id: '', name: '', surname: '', email: '', job_title: '',
    created: '', modified: '', lastLogin: '', image: '',

    // statuses
    emailVerified: false, status: false,

    // notifications
    emailJobApplication: false, emailMarketing: false, emailSettings: false,

    // image
    imageLoading: false,
  }

  closeAlert = () => this.setState({ error: false });

  editClick = () => this.props.history.push('/profile-edit');

  deleteImage = () => this.setState({ image: '' });
  deleteClick = () => alert('Delete');

  onChange = e => {
    if (e.target.type === 'checkbox') {
      this.setState({
        [e.target.name]: e.target.checked,
        error: false
      });
    } else {
      this.setState({
        [e.target.name]: e.target.value,
        error: false,
      });
    }
  }

  onChangeCheckbox = e => {
    const checked = e.target.checked;
    this.setState({
      [e.target.name]: !checked,
      error: false,
    });
  }

  componentDidMount() {
    const userData = JSON.parse(localStorage.getItem('react-redux-user-data'));
    const userId = userData?.data?.userId;

    this.setState({ loading: true });

    // get user data request
    getUserData(userId).then(res => {
      console.log(res.data);
      this.setState({
        loading: false,

        // fields
        id: res.data.id,
        name: res.data.name,
        surname: res.data.surname,
        email: res.data.email,
        job_title: res.data.job_title,
        image: res.data.image.url,
        created: res.data.created,
        modified: res.data.modified,
        lastLogin: res.data.lastLogin,
        emailVerified: res.data.emailVerified,
        emailJobApplication: res.data.emailJobApplication,
        emailMarketing: res.data.emailMarketing,
        emailVerified: res.data.emailVerified,
        emailSettings: res.data.emailSettings,
        status: res.data.status,
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
    const {
      // UI
      loading, error, errorText, imageLoading,

      // text fields
      image, id, name, surname, email, job_title, created, modified, lastLogin,

      // checkboxes
      emailVerified, status, emailJobApplication, emailMarketing, emailSettings,
    } = this.state;

    return (
      <div className="user-profile">
        <Helmet>
          <title>React-Redux | Profile</title>
        </Helmet>

        <Alert
          color="danger"
          isOpen={error}
          toggle={this.closeAlert}
        >
          {`${errorText}` || ''}
        </Alert>

        <h1>User profile</h1>

        {
          loading ? 'Loading...' : (
            <UserForm
              // UI
              loading={loading}
              imageLoading={imageLoading}

              // fields
              id={id}
              name={name}
              image={image}
              email={email}
              surname={surname}
              created={created}
              modified={modified}
              job_title={job_title}
              lastLogin={lastLogin}

              // checkboxes
              status={status}
              emailVerified={emailVerified}
              emailSettings={emailSettings}
              emailMarketing={emailMarketing}
              emailJobApplication={emailJobApplication}

              // actions
              onChange={this.onChange}
              deleteImage={this.deleteImage}
              userEditSubmit={this.userEditSubmit}
            />
          )
        }
      </div>
    )
  }
}

export default Profile;
