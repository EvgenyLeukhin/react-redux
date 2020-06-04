import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Alert } from 'reactstrap';
import Modal from 'react-modal';
import { Button, Spinner, ButtonGroup } from 'reactstrap';

// API //
import getUserData from 'Api/getUserData';
import editUser    from 'Api/editUser';
import deleteUser  from 'Api/deleteUser';

import EditForm from './form'

import './styles.scss';


class ProfileEdit extends Component {
  state = {
    // UI
    getLoading: false, editLoading: false, deleteLoading: false, error: false, errorText: '',
    deleteModal: false,

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

  deleteModalClose = () => this.setState({ deleteModal: false });
  deleteModalOpen  = () => this.setState({ deleteModal: true });

  deleteUserSubmit = () => {
    this.setState({ deleteLoading: true });
    const { id } = this.state;

    deleteUser(id).then(() => {
      this.setState({ deleteLoading: false });
      localStorage.removeItem('react-redux-user-data');
      this.props.history.push('/login');
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


  deleteImage = () => {
    this.setState({
      image: { url: '', icon: '', color: '' },
    });
  }

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
      getLoading, editLoading, deleteLoading, error, errorText, deleteModal,

      // text fields
      id, name, surname, email, job_title, created, modified, lastLogin,

      // checkboxes
      emailVerified, status, emailJobApplication, emailMarketing, emailSettings,

      // image
      image,
    } = this.state;

    return (
      <div className="edit-profile">
        <Helmet>
          <title>React-Redux | Edit Profile</title>
        </Helmet>

        <Alert
          color="danger"
          isOpen={error}
          toggle={this.closeAlert}
        >
          {`${errorText}` || ''}
        </Alert>

        <Modal
          className="delete-modal"
          overlayClassName="delete-modal__overlay"
          isOpen={deleteModal}
          onRequestClose={this.deleteModalClose}
        >
          {
            !deleteLoading ? (
              <>
                <h2>Are you sure?</h2>
                <ButtonGroup>
                  <Button color="secondary" onClick={this.deleteModalClose}>Cancel</Button>
                  <Button color="danger" onClick={this.deleteUserSubmit}>Delete</Button>
                </ButtonGroup>
              </>
            ) : <Spinner />
          }
        </Modal>

        <h1>Edit profile</h1>

        {
          getLoading ? 'Loading...' : (
            <EditForm
              // UI
              editLoading={editLoading}

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
              deleteModalOpen={this.deleteModalOpen}
              editUserSubmit={this.editUserSubmit}
              onChangeImage={this.onChangeImage}
              deleteImage={this.deleteImage}
            />
          )
        }
      </div>
    )
  }
}

export default ProfileEdit;
