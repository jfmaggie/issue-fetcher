import { combineReducers } from 'redux';
import issues from './issues';

const reducers = combineReducers({
  issues: issues
});

export default reducers;
