import React, { Component } from 'react';
import { Container } from 'reactstrap';

import { Redirect } from 'react-router-dom';

import axios from 'axios';

import { API_URL, subUrl } from 'Consts/apiUrl';

import Header from 'Layout/Header';
import Footer from 'Layout/Footer';

// import logOut from 'Api/logOut';

import './styles.scss';

class Layout extends Component {
  state = {
    loading: false,
    error: false,
    redirect: false,
    logOutSuccsess: false,
  }

  logout = e => {
    e.preventDefault();

    this.setState({ loading: true });

    const userData = JSON.parse(localStorage.getItem('react-redux-user-data'));
    const userToken = userData && userData.data.id;

    return axios.post(
      `${API_URL}/${subUrl}/users/logout`, {}, {
        headers: { Authorization: userToken }
      }
    ).then(() => {
      // remove user-data
      localStorage.removeItem('react-redux-user-data');

      // redirect
      setTimeout(() => {
        this.setState({ redirect: true });
      }, 1000);

    // if error
    }).catch(error => {
      console.log(error);
      localStorage.removeItem('react-redux-user-data');
    });
  }

  render() {
    const { redirect, loading } = this.state;

    return (
      <div className="app-layout">
        { redirect && <Redirect to='/login' /> }

        <Header logout={this.logout} loading={loading} />
        <Container className="app-layout__container">
          {this.props.children}
        </Container>
        <Footer />
      </div>
    )
  }
}

export default Layout;
