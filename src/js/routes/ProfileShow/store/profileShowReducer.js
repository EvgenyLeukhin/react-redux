import profileShowState from './profileShowState.json'; // initialState

import { PLUS, MINUS } from 'Store/types';

const profileShowReducer = (state = profileShowState, action) => {
  switch (action.type) {

    // actions //
    case PLUS: return { ...state, counter: state.counter + 1 }; // ++state.counter
    case MINUS: return { ...state, counter: state.counter - 1 }; // --state.counter

    default: return state;
  }
};

export default profileShowReducer;
