import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import { Container, Form, FormGroup, Label, Input,  Button } from 'reactstrap';

import isLogin from 'Utils/IsLogIn';

import './styles.scss';

class Login extends Component {
  state = {
    email: '',
    password: '',
    loading: false,
    success: false,
    error: false,
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  loginSubmit = e => {
    e.preventDefault();
    alert(123);
  }

  render() {
    if (isLogin) {
      return <Redirect to='/' />;
    }

    const { email, password } = this.state;

    return (
      <div>
        <Helmet>
          <title>React-Redux | Login</title>
        </Helmet>

        <Container>
          <div className="login-form">
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
                Login
              </Button>
            </Form>
          </div>
        </Container>

      </div>
    )
  }
}

export default Login;
