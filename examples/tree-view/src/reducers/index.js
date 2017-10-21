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
      let reducer = findAdapter(state);
      if (reducer) {
        return reducer(state, action);
      }
      return state
  }
}

const NodeReduceRegistry = [];

const findAdapter = (state) => {

  for (let ndx = 0; ndx < NodeReduceRegistry.length; ndx++) {
    let contrib = NodeReduceRegistry[ndx];
    if (contrib && contrib.accepts(state)) {
      // Could be cached with "self" as key
      return contrib.getAdapter(state);
    }
  }

  // No adapter for this object.
  return null;
}

const addNodeReducer = (contrib) => {
  NodeReduceRegistry.push(contrib);
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
  const { nodeId } = action;
  if (typeof nodeId === 'undefined') {
    return state;
  }

  if (action.type === DELETE_NODE) {
    const descendantIds = getAllDescendantIds(state, nodeId);
    return deleteMany(state, [ nodeId, ...descendantIds ]);
  }

  return {
    ...state,
    [nodeId]: node(state[nodeId], action)
  }
}

export { addNodeReducer };
