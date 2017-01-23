import React from 'react';
import { connect } from 'react-redux';
import { fetchIssues } from '../actions';

const OwnerRepoForm = ({ fetchIssues }) => {
  let ownerInput, repoInput;

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      fetchIssues(ownerInput.value, repoInput.value);
      ownerInput.value='';
      repoInput.value='';
    }}>
      Owner: <input type="text" ref={node => {ownerInput = node}} />
      Repo: <input type="text" ref={node => {repoInput = node}} />
      <input type="submit" />
    </form>
  );
}

const mapDispatchToProps = (dispatch) => ({
  fetchIssues: (owner, repo) => {
    dispatch(fetchIssues(owner, repo));
  }
});

const OwnerRepoFormContainer = connect(
  null,
  mapDispatchToProps
)(OwnerRepoForm);

export default OwnerRepoFormContainer;
