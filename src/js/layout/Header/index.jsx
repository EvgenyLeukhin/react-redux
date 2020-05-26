import React from 'react';

import { NavLink } from 'react-router-dom';

import { Button } from 'reactstrap';

import './styles.scss';

 const Header = () => {
  return (
    <header className="app-header">
      <NavLink to="/">React-app</NavLink>
      <Button color="primary" size="sm" outline>Log out</Button>
    </header>
  )
}

export default Header;
