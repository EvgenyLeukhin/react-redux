import React from 'react';
import Headroom from 'react-headroom';
import { NavLink } from 'react-router-dom';
import { Button, Spinner } from 'reactstrap';
import Hamburger from 'hamburger-react';

import cln from 'classnames';

import './styles.scss';

const Header = ({ logout, loading, toggleSidebar, sidebarIsOpen }) => {
  const userData = JSON.parse(localStorage.getItem('react-redux-user-data'));
  const userName = `${userData?.data?.user?.name} ${userData?.data?.user?.surname}`;
  const userImg = userData?.data?.user?.image?.url;

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
  )
}

export default Header;
