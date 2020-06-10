// IMPORT TYPES
import {
  PROFILES_LIST, START, SUCCESS, ERROR, FETCH,
} from 'Store/types';


// CREATE OF IMPORT INITIAL STATE
const initialState = {
  profiles: [],
  loading: false,
  error: false,
};

const profilesListReducer = (state = initialState, action) => {
  switch (action.type) {

  // actions //
  case FETCH + PROFILES_LIST + START:
    return {
      ...state,
      loading: true,
      error: false,
    };

  case FETCH + PROFILES_LIST + SUCCESS:
    return {
      ...state,
      loading: false,
      error: false,
      profiles: action.payload.profiles,
    };

  case FETCH + PROFILES_LIST + ERROR:
    return {
      ...state,
      loading: false,
      error: action.payload.error,
    };

  // RETURN INITIAL STATE BY DEFAULT //
  default: return state;
  }
};

export default profilesListReducer;
