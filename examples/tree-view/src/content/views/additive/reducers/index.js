import { SUM_CHILDREN } from '../actions'


const handleAction = (state, action) => {
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
