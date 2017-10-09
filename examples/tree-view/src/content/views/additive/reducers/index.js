import { SUM_CHILDREN } from '../actions'

const childIds = (state, action) => {
  switch (action.type) {
    case ADD_CHILD:
      return [ ...state, action.childId ]
    case REMOVE_CHILD:
      return state.filter(id => id !== action.childId)
    default:
      return state
  }
}

const xnode = (state, action) => {
  switch (action.type) {
    case SUM_CHILDREN:
      return {
        ...state,
        counter: state.counter + 1
      }
    default:
      return state
  }
}
