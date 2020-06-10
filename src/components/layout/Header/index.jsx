import React from 'react';
import Headroom from 'react-headroom';
import { NavLink } from 'react-router-dom';
import { Button, Spinner } from 'reactstrap';
import Hamburger from 'hamburger-react';

import cln from 'classnames';

import './styles.scss';

const Header = ({ logout, loading, toggleSidebar, sidebarIsOpen }) => {
  const userName = localStorage.getItem('react-redux-user-data-fullname');
  const userImg = localStorage.getItem('react-redux-user-data-avatar');

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
      <NavLink className="user-link" to="/profile" title={userName || 'User'}>
        <div style={{ backgroundImage: userImg ? `url(${userImg})` : 'none' }} className="user-avatar" />
        <span>{userName || 'User'}</span>
      </NavLink>
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
  );
};

export default Header;
