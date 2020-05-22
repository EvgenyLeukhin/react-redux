import React from 'react';
import ReactDOM from 'react-dom';

import App from './js/App';

// imprt fonts files when build
import 'Fonts/fonts.js';

// global css
import 'Styles/app.scss';

// global js
// import './js/global.js';

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
