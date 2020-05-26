import React from 'react';

import { NavLink } from 'react-router-dom';

import { Container, Button } from 'reactstrap';

import './styles.scss';

 const Header = () => {
  return (
    <header className="app-header">
      <Container>
        <NavLink to="/">React-app</NavLink>
        <Button color="primary" size="sm" outline>Log out</Button>
      </Container>
    </header>
  )
}

export default Header;
