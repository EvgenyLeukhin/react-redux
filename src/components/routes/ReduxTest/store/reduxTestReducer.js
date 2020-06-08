import reduxTestState from './reduxTestState.json'; // initialState

import { PLUS, MINUS } from 'Store/types';

const reduxTestReducer = (state = reduxTestState, action) => {
  switch (action.type) {

    // actions //
    case PLUS: return { ...state, counter: state.counter + 1 }; // ++state.counter
    case MINUS: return { ...state, counter: state.counter - 1 }; // --state.counter

    default: return state;
  }
};

export default reduxTestReducer;
