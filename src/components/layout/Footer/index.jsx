import React from 'react';

import { Container } from 'reactstrap';

import './styles.scss';

const Footer = () => {
  return (
    <footer className="app-footer">
      <Container>
        <small>&copy; Copyright 2020, Example Corporation</small>
      </Container>
    </footer>
  );
};

export default Footer;
