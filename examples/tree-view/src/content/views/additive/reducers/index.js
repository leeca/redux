import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';

import { SUM_CHILDREN } from '../actions';

import * as actions from '../actions';

const performAction = (state, action) => {
  switch (action.type) {
  case SUM_CHILDREN:
    return {
      ...state,
      counter: state.counter + 3
    };
  default:
    return state;
  }
}

class AdditiveNode extends Component {
  handleSumClick = () => {
    const { sumChildren, id } = this.props;
    sumChildren(id);
  }

  render() {
    return (
      <button onClick={this.handleSumClick}>
        Sum
      </button>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return state[ownProps.id];
}

const ConnectedAdditiveNode = connect(mapStateToProps, actions)(AdditiveNode);

export { ConnectedAdditiveNode, performAction };
