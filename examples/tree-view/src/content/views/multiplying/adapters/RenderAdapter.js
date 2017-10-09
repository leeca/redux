import React from 'react'
import { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'

const RenderAdapter = {

  accepts(item) {
    return item.typeName === multiplying.class
  }

  handleMultClick = e => {
    e.preventDefault();

    const { multChildren, nodeId } = this.props;
    multChildren(nodeId);
  }

  render() {
    const { counter } = this.props
    return (
      <div>
        Counter: {counter}
        {' '}
        <button onClick={this.handleMultClick}>
          Mult
        </button>
        {' '}
      </div>
    )
  }
}

default export RenderAdapter;
