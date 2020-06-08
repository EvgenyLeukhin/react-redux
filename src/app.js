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
import 'Fonts/fonts.js';    // import fonts files when build
import 'Styles/app.scss';   // global css

ReactDOM.render(
  <Provider store={createStore(rootReducer, enhancer)}>
    <App />
  </Provider>,
  document.getElementById('app')
);
