import React from 'react';

const IssuesList = ({ issues }) => {
  return (
    <div>
      <h1>Issues</h1>
      <ul>
        {issues.map((issue, index) =>
          <li key={index}>{issue.title}</li>
        )}
      </ul>
    </div>
  );
};

export default IssuesList;
