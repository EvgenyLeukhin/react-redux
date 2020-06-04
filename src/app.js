// REACT //
import React from 'react';
import ReactDOM from 'react-dom';

// REDUX //
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from 'Store/rootReducer';
import enhancer from 'Store/enhancer';

// APP COMPONENT //
import App from './js/App';

// IMPORT STATIC //
import 'Fonts/fonts.js';    // imprt fonts files when build
import 'Styles/app.scss';   // global css
// import './js/global.js'; // global js

ReactDOM.render(
  <Provider store={createStore(rootReducer, enhancer)}>
    <App />
  </Provider>,
  document.getElementById('app')
);
