import React, { Component } from 'react';
// import { Redirect } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import axios from 'axios';

import { Container, Form, FormGroup, Label, Input, Button, Alert, Spinner } from 'reactstrap';

// import isLogin from 'Utils/IsLogIn';

import { API_URL, subUrl } from 'Consts/apiUrl';

import './styles.scss';

class Login extends Component {
  state = {
    email: '',
    password: '',
    loading: false,
    success: false,
    error: false,
    errorText: '',
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
      error: false,
    });
  }

  loginSubmit = e => {
    e.preventDefault();
    const { email, password } = this.state;

    axios.post(`${API_URL}/${subUrl}/users/login?include=user`, { email, password })
      .then(this.setState({ loading: true }))

      // LOGIN //
      .then(res => {
        // save user-data obj to localStorage
        localStorage.setItem('react-redux-user-data', JSON.stringify(res));

        this.setState({
          success: true,
        });

        // redirect to home page
        setTimeout(() => {
          const { history } = this.props;
          history.push('/');
        }, 2000);
      })

      // NOT LOGIN //
      .catch(error => {
        console.log(error);
        this.setState({
          error: true,
          loading: false,
          errorText: error,
        })
      })

  }

  render() {
    const { email, password, loading, success, error } = this.state;

    return (
      <div>
        <Helmet>
          <title>React-Redux | Login</title>
        </Helmet>

        <Container>


          <div className="login-form">
            { success && <Alert color="success">Success</Alert> }
            { error   && <Alert color="danger">Wrong email or password</Alert> }
            <h1 className="text-center">Login form</h1>

            <Form
              action=""
              method="post"
              onSubmit={this.loginSubmit}
            >
              <FormGroup>
                <Label for="login-email">Email</Label>
                <Input
                  id="login-email"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={this.onChange}
                />
              </FormGroup>

              <FormGroup>
                <Label for="login-pw">Password</Label>
                <Input
                  id="login-pw"
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={this.onChange}
                />
              </FormGroup>

              <Button
                disabled={!email || !password}
                block
                color="primary"
                type="submit"
                size="lg"
              >
                { loading ? <Spinner /> : 'Login' }
              </Button>
            </Form>
          </div>
        </Container>

      </div>
    )
  }
}

export default Login;
