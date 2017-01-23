import { httpGet } from './utils';

export const FETCH_ISSUES = 'FETCH_ISSUES';
export const FETCH_ISSUES_SUCCESS = 'FETCH_ISSUES_SUCCESS';
export const FETCH_ISSUES_FAILURE = 'FETCH_ISSUES_FAILURE';

export function fetchIssues(owner, repo) {
  return (dispatch) => {
    dispatch({
      type: FETCH_ISSUES
    });

    httpGet('https://api.github.com/repos/'+owner+'/'+repo+'/issues')
      .then((response) => {
        dispatch({
          type: FETCH_ISSUES_SUCCESS,
          issues: response,
          owner: owner,
          repo: repo
        });
      })
      .catch((error) => {
        dispatch({
          type: FETCH_ISSUES_FAILURE,
          error: error,
          owner: owner,
          repo: repo
        })
      });
  };
};
