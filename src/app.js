// REACT //
import React from 'react';
import ReactDOM from 'react-dom';

// REDUX //
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from 'Store/rootReducer';
import enhancer from 'Store/enhancer';

// APP COMPONENT //
import App from './components/App';

// IMPORT STATIC //
// import fonts files when build
import 'Fonts/fonts.js';

// global css
import 'Styles/app.scss';

ReactDOM.render(
  <Provider store={createStore(rootReducer, enhancer)}>
    <App />
  </Provider>,
  document.getElementById('app')
);
