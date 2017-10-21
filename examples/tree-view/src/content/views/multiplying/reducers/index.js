import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';

import { MULTIPLY_CHILDREN } from '../actions';

import * as actions from '../actions';

const performAction = (state, action) => {
  switch (action.type) {
  case MULTIPLY_CHILDREN:
    return {
      ...state,
      counter: state.counter + 10
    };
  default:
    return state;
  }
}

class MultiplyingNode extends Component {
  handleTimesClick = () => {
    const { multiplyChildren, id } = this.props;
    multiplyChildren(id);
  }

  render() {
    return (
      <button onClick={this.handleTimesClick}>
        Times
      </button>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return state[ownProps.id];
}

const ConnectedMultiplyingNode = connect(mapStateToProps, actions)(MultiplyingNode);

export { ConnectedMultiplyingNode, performAction };
