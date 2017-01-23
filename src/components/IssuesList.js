import React from 'react';
import { fetchIssues } from '../actions';

class IssuesList extends React.Component {
  componentDidMount() {
    const { dispatch, owner, repo } = this.props;
    dispatch(fetchIssues(owner, repo));
  }

  render() {
    const { issues, owner, repo, error } = this.props;

    let errorDiv = '';
    if (error) {
      errorDiv = <div>Error: Issues are {error.message}</div>;
    }

    return (
      <div>
        <div>Owner: {owner}</div>
        <div>Repo: {repo}</div>
        {errorDiv}
        <ul>
          {issues.map((issue, index) =>
            <li key={index}>{issue.title}</li>
          )}
        </ul>
      </div>
    );
  }
}

export default IssuesList;
