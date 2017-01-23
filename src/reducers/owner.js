import { FETCH_ISSUES_SUCCESS, FETCH_ISSUES_FAILURE } from '../actions';

const initialState = 'facebook';

const owner = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ISSUES_SUCCESS:
      return action.owner;
    case FETCH_ISSUES_FAILURE:
      return action.owner;
    default:
      return state;
  }
};

export default owner;
