import React from 'react';
import { NavLink } from 'react-router-dom';
import PT from 'prop-types';

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

SidebarLink.propTypes = {
  to: PT.string,
  exact: PT.bool,
  onClick: PT.func,
  linkText: PT.string,
};

export default SidebarLink;
