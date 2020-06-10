// IMPORT TYPES
import {
  PROFILE_SHOW, START, SUCCESS, ERROR, FETCH,
} from 'Store/types';


// CREATE OF IMPORT INITIAL STATE
const initialState = {
  userData: {},
  loading: false,
  error: false,
};

const profileShowReducer = (state = initialState, action) => {
  switch (action.type) {

  // actions //
  case FETCH + PROFILE_SHOW + START:
    return {
      ...state,
      loading: true,
      error: false,
    };

  case FETCH + PROFILE_SHOW + SUCCESS:
    return {
      ...state,
      loading: false,
      error: false,
      userData: action.payload.userData,
    };

  case FETCH + PROFILE_SHOW + ERROR:
    return {
      ...state,
      loading: false,
      error: action.payload.error,
    };

    // RETURN INITIAL STATE BY DEFAULT //
  default: return state;
  }
};

export default profileShowReducer;
