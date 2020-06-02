import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Alert } from 'reactstrap';

// API //
import getUserData from 'Api/getUserData';
import editUser    from 'Api/editUser';
import deleteUser  from 'Api/deleteUser';

import UserForm from './form'

import './styles.scss';


class Profile extends Component {
  state = {
    // UI
    getLoading: false, editLoading: false, deleteLoading: false, error: false, errorText: '',

    // fields
    id: '', name: '', surname: '', email: '', job_title: '',
    created: '', modified: '', lastLogin: '', image: '',

    // statuses
    emailVerified: false, status: false,

    // notifications
    emailJobApplication: false, emailMarketing: false, emailSettings: false,

    // image
    image: { url: '', icon: '', color: '' }
  }


  // CATCH ERRORS //
  catchErrors = error => {
    // redirect to login if 401 (request, response)
    if (error.response.status === 401) {
      localStorage.removeItem('react-redux-user-data');
      this.props.history.push('/login');

    } else {
      console.log(error);
      this.setState({
        getLoading: false,
        editLoading: false,
        deleteLoading: false,
        error: true,
        errorText: error
      });
    }
  }


  // ACTIONS //
  closeAlert = () => this.setState({ error: false });

  editUserSubmit = e => {
    e.preventDefault();
    this.setState({ editLoading: true });
  }

  deleteUserSubmit = () => {
    this.setState({ deleteLoading: true });
    const { id } = this.state;

    deleteUser(id).then(() => {
      setTimeout(() => {
        this.setState({ deleteLoading: false });
        localStorage.removeItem('react-redux-user-data');
        this.props.history.push('/login');
      }, 2000);

    }).catch(error => this.catchErrors(error))
  }

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


  componentDidMount() {
    const userData = JSON.parse(localStorage.getItem('react-redux-user-data'));
    const userId = userData?.data?.userId;

    this.setState({ getLoading: true });

    // get user data request
    getUserData(userId).then(res => {
      // console.log(res.data);
      this.setState({
        getLoading: false,

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
      getLoading, editLoading, deleteLoading, error, errorText,

      // text fields
      id, name, surname, email, job_title, created, modified, lastLogin,

      // checkboxes
      emailVerified, status, emailJobApplication, emailMarketing, emailSettings,

      // image
      image,
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
          getLoading ? 'Loading...' : (
            <UserForm
              // UI
              getLoading={getLoading}
              editLoading={editLoading}
              deleteLoading={deleteLoading}

              // fields
              id={id}
              name={name}
              email={email}
              image={image}
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
              deleteUserSubmit={this.deleteUserSubmit}
              editUserSubmit={this.editUserSubmit}
              onChangeImage={this.onChangeImage}
            />
          )
        }
      </div>
    )
  }
}

export default Profile;
