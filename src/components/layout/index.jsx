import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { Redirect } from 'react-router-dom';
import PT from 'prop-types';

import Sidebar from 'Layout/Sidebar';
import Header from 'Layout/Header';
import Footer from 'Layout/Footer';

import logOut from 'Api/logOut';

import clearStorage from 'Utils/clearStorage';

import './styles.scss';

class Layout extends Component {
  state = {
    loading: false,
    redirect: false,
    sidebarIsOpen: false,
  }

  logout = e => {
    e.preventDefault();

    this.setState({ loading: true });

    logOut()
      .then(() => {
        // redirect when logOut
        setTimeout(() => {
          this.setState({ redirect: true });
        }, 1000);
      })

      // if error
      .catch(error => {
        // clear localStorage
        clearStorage();

        // eslint-disable-next-line no-console
        console.log(error);
        this.setState({
          redirect: true,
          loading: false
        });
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
    );
  }
}

Layout.propTypes = {
  children: PT.object,
};

export default Layout;