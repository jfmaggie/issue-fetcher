import { FETCH_ISSUES_SUCCESS, FETCH_ISSUES_FAILURE } from '../actions';

const initialState = 'react';

const repo = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ISSUES_SUCCESS:
      return action.repo;
    case FETCH_ISSUES_FAILURE:
      return action.repo;
    default:
      return state;
  }
};

export default repo;
