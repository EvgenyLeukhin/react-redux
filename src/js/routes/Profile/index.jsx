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

import axios from 'axios';

import { API_URL, subUrl } from 'Api/apiUrl';


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
    image: { url: '', icon: '', color: '' }, imageLoading: false, uploadedImage: null,
  }


  // CATCH ERRORS //
  catchErrors = error => {
    // redirect to login if 401 (request, response)
    if (error.response.status === 401) {
      localStorage.removeItem('react-redux-user-data');
      this.props.history.push('/login');

    } else {
      console.log(error);
      this.setState({ loading: false, error: true, errorText: error });
    }
  }


  // ACTIONS //
  closeAlert = () => this.setState({ error: false });

  editClick = () => this.props.history.push('/profile-edit');

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


  // IMAGE //
  onChangeImage = e => this.setState({
    image: { url: e.target.value }
  });


  deleteImage = () => this.setState({
    image: { url: '', icon: '', color: '' },
    imageLoading: false,
    uploadedImage: null,
  });


  onUploadImage = e => {
  }

  componentDidMount() {
    const userData = JSON.parse(localStorage.getItem('react-redux-user-data'));
    const userId = userData?.data?.userId;

    this.setState({ loading: true });

    // get user data request
    getUserData(userId).then(res => {
      // console.log(res.data);
      this.setState({
        loading: false,

        // fields
        id:                  res.data.id,
        name:                res.data.name,
        surname:             res.data.surname,
        email:               res.data.email,
        job_title:           res.data.job_title,
        image:               res.data.image,
        created:             res.data.created,
        modified:            res.data.modified,
        lastLogin:           res.data.lastLogin,
        emailVerified:       res.data.emailVerified,
        emailJobApplication: res.data.emailJobApplication,
        emailMarketing:      res.data.emailMarketing,
        emailVerified:       res.data.emailVerified,
        emailSettings:       res.data.emailSettings,
        status:              res.data.status,
      })
    }).catch(error => {
      this.catchErrors(error);
    })
  }

  render() {
    const {
      // UI
      loading, error, errorText,

      // text fields
      id, name, surname, email, job_title, created, modified, lastLogin,

      // checkboxes
      emailVerified, status, emailJobApplication, emailMarketing, emailSettings,

      // image
      image, imageLoading,
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

              // fields
              id={id}
              name={name}
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

              // image
              image={image}
              fileInputImage={this.fileInputImage}
              onUploadImage={this.onUploadImage}
              imageLoading={imageLoading}
              onChangeImage={this.onChangeImage}
            />
          )
        }
      </div>
    )
  }
}

export default Profile;
