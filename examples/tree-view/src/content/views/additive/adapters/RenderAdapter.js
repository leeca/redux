import React from 'react'
import { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'

const RenderAdapter = {
  accepts(item) {
    return item.typeName === additive.class
  }

  handleAddClick = e => {
    e.preventDefault();

    const { sumChildren, nodeId } = this.props;
    sumChildren(nodeId);
  }

  render() {
    const { counter, parentId, childIds, sumChildren } = this.props
    return (
      <div>
        Counter: {counter}
        {' '}
        <button onClick={this.handleAddClick}>
          Sum
        </button>
        {' '}
      </div>
    )
  }
}

default export RenderAdapter;
