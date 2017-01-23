import React from 'react';
import { connect } from 'react-redux';
import IssuesList from '../components/IssuesList';

const mapStateToProps = (state) => ({
  issues: state.issues.issues,
  error: state.issues.error,
  owner: state.owner,
  repo: state.repo
});

const IssuesListContainer = connect(
  mapStateToProps
)(IssuesList);

export default IssuesListContainer;
