import React from 'react';
import { HashRouter as Router } from 'react-router-dom';

import ScrollToTop from 'Utils/ScrollToTop';

import Routes from 'Routes/index.jsx';

const App = () => (
  <Router>
    <ScrollToTop>
      <Routes />
    </ScrollToTop>
  </Router>
);

export default App;
