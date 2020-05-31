import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Container, Form, FormGroup, Label, Input, Button, Alert, Spinner } from 'reactstrap';

import getUserData from 'Api/getUserData';

class ProfileEdit extends Component {
  state = {
    loading: false,
    error: false,
    errorText: '',
    userData: {},
    name: '', surname: '', email: '', job_title: '',
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
        name: res.data.name,
        surname: res.data.surname,
        email: res.data.email,
        job_title: res.data.job_title,
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

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
      error: false,
    });
  }

  render() {
    const { name, surname, email, job_title } = this.state;

    return (
      <div className="user-edit">
        <Helmet>
          <title>React-Redux | Profile Edit</title>
        </Helmet>

        <div className="title-container">
          <h1>Edit profile</h1>
          <Button color="danger" onClick={this.deleteClick}>Delete user</Button>

          <Container className="user-edit__container">
            <Form
              action=""
              method="post"
              className="user-edit"
              onSubmit={this.userEditSubmit}
            >
              <FormGroup>
                <Label for="user-edit__name">Name</Label>
                <Input
                  id="user-edit__name"
                  type="text"
                  name="name"
                  value={name}
                  onChange={this.onChange}
                />
              </FormGroup>

              <FormGroup>
                <Label for="user-edit__surname">Surname</Label>
                <Input
                  id="user-edit__surname"
                  type="text"
                  name="surname"
                  value={surname}
                  onChange={this.onChange}
                />
              </FormGroup>

              <FormGroup>
                <Label for="user-edit__email">Surname</Label>
                <Input
                  id="user-edit__email"
                  type="text"
                  name="email"
                  value={email}
                  onChange={this.onChange}
                />
              </FormGroup>

              <FormGroup>
                <Label for="user-edit__job_title">Job title</Label>
                <Input
                  id="user-edit__job_title"
                  type="text"
                  name="job_title"
                  value={job_title}
                  onChange={this.onChange}
                />
              </FormGroup>
            </Form>
          </Container>
        </div>
      </div>
    )
  }
}

export default ProfileEdit;
