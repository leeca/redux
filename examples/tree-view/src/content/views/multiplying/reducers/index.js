import { MULT_CHILDREN } from '../actions'


const handleAction = (state, action) => {

  switch (action.type) {
    case MULT_CHILDREN:
      return {
        ...state,
        counter: state.counter * 2
      }
    default:
      return state
  }
}
