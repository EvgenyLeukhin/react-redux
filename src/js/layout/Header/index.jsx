import React from 'react';
import Headroom from 'react-headroom';
import { NavLink } from 'react-router-dom';
import { Container, Button, Spinner } from 'reactstrap';
import { MenuIcon } from 'react-simple-sidenav';

import cln from 'classnames';

import './styles.scss';

const Header = ({ logout, loading, toggleSidebar, sidebarIsOpen }) => {
  return (
    <Headroom className={cln({ 'sidebarIsOpen': sidebarIsOpen })}>
      <Container>
        <MenuIcon className="burger-ico" onClick={toggleSidebar} />
        <NavLink to="/">React-app</NavLink>
        <Button
          color="primary"
          size="sm"
          outline
          onClick={logout}
          style={{ minWidth: '66px' }}
        >
          { loading ? <Spinner size="sm" /> : 'Log out' }
        </Button>
      </Container>
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
