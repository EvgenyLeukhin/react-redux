# Work with Redux 

1. **Add <Provider> wrapper to App component**

Store is a global state of application. При чем store - это сквозной state, который может не сбрасываться при 
смене роутинга (хранит состояние различных комнонентов).

```js
...
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from 'Store/rootReducer';
import enhancer from 'Store/enhancer';

...
  <Provider store={createStore(rootReducer, enhancer)}>
    <App />
  </Provider>,
...
``` 

2. **rootReducer.js**

Storage of components reducers. Each route component should have separate reducer and RootReducer is a collection of this reducers.

```js
import { combineReducers } from 'redux';

import reducer1 from 'Routes/Route1/store/reducer1';
import reducer2 from 'Routes/Route2/store/reducer2';
import reducer3 from 'Routes/Route3/store/reducer3';

export default combineReducers({
  route1: reducer1,
  route2: reducer2,
  route3: reducer3,
});
```

3. **enhancer.js**

Need for Redux dev-tools chrome plug-in

```js
import thunk from 'redux-thunk';
import { compose, applyMiddleware } from 'redux';

const composeEnhancers = typeof window === 'object'
  && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
  : compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));

export default enhancer;
```

4. **Separate reducer**

Редьюсер просто проверяет какой-либо кейс (по action.type) и возвращает определенный state.
В нем находятся все возможные состояния компонента/приложения в зависимости от каких-либо экшенов.

```js
// initial state of component
const initialState = {
  userData: {},
  loading: false,
  error: false,
};

// import 
import {
  PROFILE_SHOW, START, SUCCESS, ERROR, FETCH,
} from 'Store/types';


const someReducer = (state = initialState, action) => {
  // check action parametr of reducer
  switch (action.type) {

    // list of cases
    case FETCH + PROFILE_SHOW + START: // this is just string 'FETCH_PROFILE_SHOW_START'
      return {
        ...state,
        loading: true,
        error: false,
      }
      ...
  }
};
```

5. **Connect component to the store**

```js
import { connect } from 'react-redux';
import SomePage    from './page';

// IMPORT ACTIONS
import fetchUserData from './store/Route1';

import './styles.scss';

// import data from the store to component props
const mapStateToProps = store => {
  return {
    userData: store.profileShow.userData,
    loading:  store.profileShow.loading,
    error:    store.profileShow.error,
  };
};

// mapStateToProps, mapDispatchToProps
export default connect(mapStateToProps, { fetchUserData })(SomePage);

```

6. **Action**

 