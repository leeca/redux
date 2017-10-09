import { INCREMENT, ADD_CHILD, REMOVE_CHILD, CREATE_NODE, DELETE_NODE } from '../actions'

const node = (state, action) => {
  switch (action.type) {
    case CREATE_NODE:
      return {
        id: action.nodeId,
        counter: 0,
        childIds: []
      }
    case INCREMENT:
      return {
        ...state,
        counter: state.counter + 1
      }
    case ADD_CHILD:
      return {
        ...state,
        childIds: [ ...state.childIds, action.childId ]
      }
    case REMOVE_CHILD:
      return {
        ...state,
        childIds: state.childIds.filter(id => id !== action.childId)
      }
    default:
      let adapter = findAdapter(state);
      if (adapter) {
        return adapter.handleAction(state, action);
      }
      return state
  }
}

// Need to make these global state .. probably not Redux "state".
//ActionRegistry should be the same one used in containers/Node.js
let ActionRegistry = []

// Duplicated from containers/Node.js
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


const getAllDescendantIds = (state, nodeId) => (
  state[nodeId].childIds.reduce((acc, childId) => (
    [ ...acc, childId, ...getAllDescendantIds(state, childId) ]
  ), [])
)

const deleteMany = (state, ids) => {
  state = { ...state }
  ids.forEach(id => delete state[id])
  return state
}

export default (state = {}, action) => {
  const { nodeId } = action
  if (typeof nodeId === 'undefined') {
    return state
  }

  if (action.type === DELETE_NODE) {
    const descendantIds = getAllDescendantIds(state, nodeId)
    return deleteMany(state, [ nodeId, ...descendantIds ])
  }

  return {
    ...state,
    [nodeId]: node(state[nodeId], action)
  }
}
