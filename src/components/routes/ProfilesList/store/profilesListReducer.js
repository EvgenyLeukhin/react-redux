// IMPORT TYPES
import {
  PROFILES_LIST, START, SUCCESS, ERROR, FETCH,
} from 'Store/types';


// CREATE OF IMPORT INITIAL STATE
const initialState = {
  profiles: [],
  loading: false,
  error: {},
};

const profilesListReducer = (state = initialState, action) => {
  switch (action.type) {

  // actions //
  case FETCH + PROFILES_LIST + START:
    return {
      ...state,
      loading: true,
    };

  case FETCH + PROFILES_LIST + SUCCESS:
    return {
      ...state,
      loading: false,
      profiles: action.payload,
    };

  case FETCH + PROFILES_LIST + ERROR:
    return {
      ...state,
      loading: false,
      error: action.payload,
    };

  // RETURN INITIAL STATE BY DEFAULT //
  default: return state;
  }
};

export default profilesListReducer;
