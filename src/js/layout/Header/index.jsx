import React from 'react';
import Headroom from 'react-headroom';
import { NavLink } from 'react-router-dom';
import { Button, Spinner } from 'reactstrap';
import Hamburger from 'hamburger-react'

import cln from 'classnames';

import './styles.scss';

const Header = ({ logout, loading, toggleSidebar, sidebarIsOpen }) => {
  return (
    <Headroom className={cln({ 'sidebarIsOpen': sidebarIsOpen })}>
      <Hamburger
        className="burger-ico"
        color="maroon"
        size={20}
        toggled={sidebarIsOpen}
        toggle={toggleSidebar}
      />
      <NavLink className="brand-link" to="/">React-app</NavLink>
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

// import React from 'react';

// import { NavLink } from 'react-router-dom';

// import { Container, Button, Spinner } from 'reactstrap';

// import './styles.scss';

//  const Header = ({ logout, loading }) => {
//   return (
//     <header className="app-header">
//       <Container>
//         <NavLink to="/">React-app</NavLink>
//         <Button
//           color="primary"
//           size="sm"
//           outline
//           onClick={logout}
//           style={{ minWidth: '66px' }}
//         >
//           { loading ? <Spinner size="sm" /> : 'Log out' }
//         </Button>
//       </Container>
//     </header>
//   )
// }
