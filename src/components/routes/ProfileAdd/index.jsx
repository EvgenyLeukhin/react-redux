import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Alert } from 'reactstrap';
import PT from 'prop-types';

// API //
import addUser from 'Api/addUser';

import AddForm from './form';

import './styles.scss';


class ProfileAdd extends Component {
  state = {
    // UI
    addLoading: false, error: false, errorText: '',

    // fields
    name: '', surname: '', email: '', password: '',
  }


  // CATCH ERRORS //
  catchErrors = error => {
    // redirect to login if 401 (request, response)
    if (error.response.status === 401) {
      localStorage.removeItem('react-redux-user-data');
      localStorage.removeItem('react-redux-user-data-fullname');
      localStorage.removeItem('react-redux-user-data-avatar');

      this.props.history.push('/login');

    } else {
      // eslint-disable-next-line no-console
      console.log(error);
      this.setState({
        addLoading: false,
        error: true,
        errorText: error
      });
    }
  }


  // ACTIONS //
  closeAlert = () => this.setState({ error: false });

  cancelClick = () => {
    const { history } = this.props;
    history.push('/');
  }

  addUserSubmit = e => {
    e.preventDefault();
    const { history } = this.props;
    const { name, surname, password, email } = this.state;
    this.setState({ addLoading: true });

    addUser(name, surname, password, email)
      .then(() => {
        setTimeout(() => {
          this.setState({ addLoading: false });
          history.push('/profiles');
        }, 500);
      }).catch(error => {
        this.catchErrors(error);
      });
  }

  onChange = e => {
    this.setState({
      error: false,
      [e.target.name]: e.target.value,
    });
  }

  render() {
    const {
      // UI
      addLoading, error, errorText,

      // text fields
      name, surname, email, password,
    } = this.state;

    return (
      <div className="add-profile">
        <Helmet>
          <title>React-Redux | Add Profile</title>
        </Helmet>

        <Alert color="danger" isOpen={error} toggle={this.closeAlert}>
          {`${errorText}` || ''}
        </Alert>

        <h1>Add profile</h1>

        <AddForm
          // UI
          addLoading={addLoading}

          // fields
          name={name} surname={surname} email={email} password={password}

          // actions
          onChange={this.onChange} addUserSubmit={this.addUserSubmit} cancelClick={this.cancelClick}
        />
      </div>
    );
  }
}

ProfileAdd.propTypes = {
  history: PT.object,
};

export default ProfileAdd;
