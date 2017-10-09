import React from 'react'
import { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'

export class Node extends Component {
  handleIncrementClick = () => {
    const { increment, id } = this.props
    increment(id)
  }

  handleAddChildClick = e => {
    e.preventDefault()

    const { addChild, createNode, id } = this.props
    const childId = createNode().nodeId
    addChild(id, childId)
  }

  handleRemoveClick = e => {
    e.preventDefault()

    const { removeChild, deleteNode, parentId, id } = this.props
    removeChild(parentId, id)
    deleteNode(id)
  }

  renderChild = childId => {
    const { id } = this.props
    return (
      <li key={childId}>
        <ConnectedNode id={childId} parentId={id} />
      </li>
    )
  }

  render() {
    const { counter, parentId, childIds } = this.props

    // let adapter = findAdapter(this.state[this.props.id], RenderRegistry);
    let adapter = null;
    return (
      <div>
        Counter: {counter}
        {' '}
        <button onClick={this.handleIncrementClick}>
          +
        </button>
        {' '}
        {adapter && adapter.render()}
        {typeof parentId !== 'undefined' &&
          <a href="#" onClick={this.handleRemoveClick} // eslint-disable-line jsx-a11y/href-no-hash
             style={{ color: 'lightgray', textDecoration: 'none' }}>
            ×
          </a>
        }
        <ul>
          {childIds.map(this.renderChild)}
          <li key="add">
            <a href="#" // eslint-disable-line jsx-a11y/href-no-hash
              onClick={this.handleAddChildClick}
            >
              Add child
            </a>
          </li>
        </ul>
      </div>
    )
  }
}

// Need to make these global state .. probably not Redux "state".
// ActionRegistry should be the same one used in reducers/index.js
let RenderRegistry = []
let ActionRegistry = []

// Duplicated from reducers/index.js
const findAdapter = (self, registry) => {

  for (let ndx = 0; ndx < registry.length; ndx++) {
    let contrib = registry[ndx];
    if (contrib && contrib.accepts(self)) {
      // Could be cached with "self" as key
      return contrib.getAdapter();
    }
  }

  // No adapter for this object.
  return null;
}

function mapStateToProps(state, ownProps) {
  return state[ownProps.id];
}

function mapDispatchToProps(state, ownProps) {
  let adapter = findAdapter(state[ownProps.id], ActionRegistry);
  if (adapter) {
    return {...actions, ...adapter.getActions()};
  }
  return actions;
}

const ConnectedNode = connect(mapStateToProps, mapDispatchToProps)(Node)
export default ConnectedNode
