import React, { Component } from 'react';
import { Container } from 'reactstrap';

import Header from 'Layout/Header';
import Footer from 'Layout/Footer';

import './styles.scss';

class Layout extends Component {
  render() {
    return (
      <div className="app-layout">
        <Header />
        <Container className="app-layout__container">
          {this.props.children}
        </Container>
        <Footer />
      </div>
    )
  }
}

export default Layout;
