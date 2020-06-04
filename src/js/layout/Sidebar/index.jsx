import React from 'react';
import { NavLink } from 'react-router-dom';
import SideNav from 'react-simple-sidenav';

import './styles.scss';

const Sidebar = ({ showNav, onHideNav }) => {
  const styles = {
    color: 'black',
    fontWeight: 'bold',
    cursor: 'default',
    pointEvents: 'none',
  };

  const navItems = [
    <NavLink activeStyle={styles} onClick={onHideNav} to="/" exact>Home</NavLink>,
    <NavLink activeStyle={styles} onClick={onHideNav} to="/login">Login</NavLink>,
    <NavLink activeStyle={styles} onClick={onHideNav} to="/profile">Edit profile</NavLink>,
    <NavLink activeStyle={styles} onClick={onHideNav} to="/profiles">Profiles</NavLink>,
    <NavLink activeStyle={styles} onClick={onHideNav} to="/page-1">Page 1</NavLink>,
    <NavLink activeStyle={styles} onClick={onHideNav} to="/page-2">Page 2</NavLink>,
    <NavLink activeStyle={styles} onClick={onHideNav} to="/123">404 page</NavLink>
  ];

  return (
    <SideNav
      style={{ top: '50px' }}
      showNav={showNav}
      onHideNav={onHideNav}
      title="React App"
      items={navItems}
      titleStyle={{ backgroundColor: 'maroon', marginBottom: '30px' }}
      itemStyle={{
        backgroundColor: '#fff',
        listStyle: 'none'
      }}
      itemHoverStyle={{ backgroundColor: 'transparent' }}
    />
  );
};

export default Sidebar;
