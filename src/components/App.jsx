import React from 'react';
import { HashRouter as Router } from 'react-router-dom';

import ScrollToTop from 'Routes/ScrollToTop';

import Routes from 'Routes/index.jsx';

const App = () => (
  <Router>
    <ScrollToTop>
      <Routes />
    </ScrollToTop>
  </Router>
);

export default App;
