import React from 'react';
import { connect } from 'react-redux';
import IssuesList from '../components/IssuesList';

class Root extends React.Component {
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

const mapDispatchToProps = (dispatch) => {
  return {

  };
};

const RootContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Root);

export default RootContainer;
