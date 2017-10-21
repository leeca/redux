import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class EmptyNodeAdapter extends Component {
  render() {
    return (null);
  }
}

export class Node extends Component {
  handleIncrementClick = () => {
    const { increment, id } = this.props;
    increment(id);
  }

  handleAddChildClick = e => {
    e.preventDefault();

    const { addChild, createNode, id } = this.props;
    const childId = createNode().nodeId;
    addChild(id, childId);
  }

  handleRemoveClick = e => {
    e.preventDefault();

    const { removeChild, deleteNode, parentId, id } = this.props;
    removeChild(parentId, id);
    deleteNode(id);
  }

  renderChild = childId => {
    const { id } = this.props;

    return (
      <li key={childId}>
        <ConnectedNode id={childId} parentId={id} />
      </li>
    )
  }

  render() {
    const { counter, parentId, childIds } = this.props;
     let Adapter = findAdapter(this.props);

    return (
      <div>
        Counter: {counter}
        {' '}
        <button onClick={this.handleIncrementClick}>
          +
        </button>
        {' '}
        <Adapter id={this.props.id} />
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

const NodeRenderRegistry = [];

const findAdapter = (props) => {

  for (let ndx = 0; ndx < NodeRenderRegistry.length; ndx++) {
    let contrib = NodeRenderRegistry[ndx];
    if (contrib && contrib.accepts(props)) {
      // Could be cached with "self" as key
      return contrib.getAdapter(props);
    }
  }

  // No adapter for this object.
  return EmptyNodeAdapter;
}

const addNodeRenderer = (contrib) => {
  NodeRenderRegistry.push(contrib);
}

function mapStateToProps(state, ownProps) {
  return state[ownProps.id];
}

const ConnectedNode = connect(mapStateToProps, actions)(Node);

export { ConnectedNode, addNodeRenderer };
