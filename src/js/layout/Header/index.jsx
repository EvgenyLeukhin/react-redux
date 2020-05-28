import React from 'react';
import Headroom from 'react-headroom';
import { NavLink } from 'react-router-dom';
import { Button, Spinner } from 'reactstrap';
import Hamburger from 'hamburger-react'

import cln from 'classnames';

import './styles.scss';

const Header = ({ logout, loading, toggleSidebar, sidebarIsOpen }) => {
  const userData = JSON.parse(localStorage.getItem('react-redux-user-data'));
  const { name, surname } = userData.data.user;

  return (
    <Headroom className={cln({ 'sidebarIsOpen': sidebarIsOpen })}>
      <Hamburger
        className="burger-ico"
        color="maroon"
        size={20}
        toggled={sidebarIsOpen}
        toggle={toggleSidebar}
      />
      <NavLink className="brand-link" to="/" exact>React-app</NavLink>
      <NavLink className="user-link" to="/user">{`${name || ''} ${surname || ''}`}</NavLink>
      <Button
        className="btn-logout"
        color="primary"
        size="sm"
        outline
        onClick={logout}
      >
        { loading ? <Spinner size="sm" /> : 'Log out' }
      </Button>
    </Headroom>
  )
}

export default Header;
