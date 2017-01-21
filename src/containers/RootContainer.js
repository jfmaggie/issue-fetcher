import React from 'react';
import { connect } from 'react-redux';
import IssuesList from '../components/IssuesList';
import { fetchIssues } from '../actions';

class Root extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchIssues('facebook', 'react'));
  };

  render() {
    const { issues } = this.props;

    return (
      <div>
        <IssuesList issues={issues} />
      </div>
    );
  };
}

const mapStateToProps = (state) => {
  return {
    issues: state.issues.issues
  };
};

const RootContainer = connect(
  mapStateToProps
)(Root);

export default RootContainer;
