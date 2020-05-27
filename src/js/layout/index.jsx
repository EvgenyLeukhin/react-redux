import React, { Component } from 'react';
import { Container } from 'reactstrap';

import { Redirect } from 'react-router-dom';

import axios from 'axios';

import { API_URL, subUrl } from 'Consts/apiUrl';

import Sidebar from 'Layout/Sidebar';
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
    sidebarIsOpen: false,
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

  toggleSidebar = () => {
    const { sidebarIsOpen } = this.state;
    this.setState({ sidebarIsOpen: !sidebarIsOpen });
  }

  hideSidebar = () => this.setState({ sidebarIsOpen: false });

  render() {
    const { redirect, loading, sidebarIsOpen } = this.state;

    return (
      <div className="app-layout">
        { redirect && <Redirect to='/login' /> }

        <Header
          toggleSidebar={this.toggleSidebar}
          logout={this.logout}
          loading={loading}
          sidebarIsOpen={sidebarIsOpen}
        />
        <Sidebar
          showNav={sidebarIsOpen}
          onHideNav={this.hideSidebar}
        />
        <Container className="app-layout__container">
          {this.props.children}
        </Container>
        <Footer />
      </div>
    )
  }
}

export default Layout;
