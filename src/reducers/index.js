import { combineReducers } from 'redux';
import issues from './issues';
import owner from './owner';
import repo from './repo';

const reducers = combineReducers({
  issues: issues,
  owner: owner,
  repo: repo
});

export default reducers;
