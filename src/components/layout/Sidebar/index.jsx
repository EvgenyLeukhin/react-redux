import React from 'react';
import SideNav from 'react-simple-sidenav';
import PT from 'prop-types';

import SidebarLink from './SidebarLink';

import sidebarLinks from 'Consts/sidebarLinks';

import './styles.scss';

const Sidebar = ({ showNav, onHideNav }) => {
  const navItems = sidebarLinks.map(i => (
    <SidebarLink
      key={i.id}
      to={i.to}
      exact={i.exact}
      onClick={onHideNav}
      linkText={i.linkText}
    />
  ));

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

Sidebar.propTypes = {
  to: PT.string,
  showNav: PT.bool,
  onHideNav: PT.func,
};

export default Sidebar;
