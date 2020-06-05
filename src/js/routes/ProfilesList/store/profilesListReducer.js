import profilesListState from './profilesListState.json'; // initialState

import { PROFILES_PLUS, PROFILES_MINUS } from 'Store/types';

const profilesListReducer = (state = profilesListState, action) => {
  switch (action.type) {

    // actions //
    case PROFILES_PLUS: return { ...state, counter: state.counter + 1 }; // ++state.counter
    case PROFILES_MINUS: return { ...state, counter: state.counter - 1 }; // --state.counter

    default: return state;
  }
};

export default profilesListReducer;
