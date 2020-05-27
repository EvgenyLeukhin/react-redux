import React from 'react';
import SideNav from 'react-simple-sidenav';
import { NavLink } from 'react-router-dom';

import './styles.scss';

const Sidebar = ({ showNav, onHideNav }) => {
  const styles = {
    color: 'black',
    fontWeight: 'bold',
    cursor: 'default',
    pointEvents: 'none',
  };

  const navItems = [
    <NavLink activeStyle={styles} onClick={onHideNav} to="/" exact>Home page</NavLink>,
    <NavLink activeStyle={styles} onClick={onHideNav} to="/login">Login page</NavLink>,
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
      titleStyle={{ backgroundColor: 'maroon' }}
      itemStyle={{ backgroundColor: '#fff' }}
      itemHoverStyle={{ backgroundColor: 'transparent' }}
    />
  );
};

export default Sidebar;