import React from 'react';
import { NavLink } from 'react-router-dom';

const styles = {
  color: 'black',
  fontWeight: 'bold',
  cursor: 'default',
  pointEvents: 'none',
};

const SidebarLink = ({ to, exact, onClick, linkText }) => (
  <NavLink
    to={`/${to}`}
    exact={exact}
    onClick={onClick}
    activeStyle={styles}
  >
    {linkText}
  </NavLink>
);

export default SidebarLink;
