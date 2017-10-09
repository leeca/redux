import React from 'react'
import { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'

export class RenderAdapter extends Component {
  handleActionClick = () => {
    const { increment, id } = this.props
    increment(id)
  }

  render() {
    const { counter } = this.props
    return (
      <div>
        Counter: {counter}
        {' '}
        <button onClick={this.handleActionClick}>
          Sum
        </button>
        {' '}
      </div>
    )
  }
}

