import { FETCH_ISSUES, FETCH_ISSUES_SUCCESS, FETCH_ISSUES_FAILURE } from '../actions';

const initialState = {
  loading: false,
  issues: [],
  error: null
};

const issues = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ISSUES:
      return {
        ...state,
        loading: true,
        error: null
      };
    case FETCH_ISSUES_SUCCESS:
      return {
        ...state,
        loading: false,
        issues: action.response.issues
      };
    case FETCH_ISSUES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    default:
      return state;
  }
};

export default issues;
