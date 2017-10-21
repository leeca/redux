import { MULTIPLYING_TYPE } from '../../../data/multiplying';

import { addNodeRenderer } from '../../../../containers/Node';
import { addNodeReducer } from '../../../../reducers';

import { ConnectedMultiplyingNode, performAction } from '../reducers';

const nodeRenderContrib = {
  accepts: (state) => {
    return (state.typeName === MULTIPLYING_TYPE);
  },

  getAdapter: (state) => {
    return ConnectedMultiplyingNode;
  }
}

const nodeReduceContrib = {
  accepts: (state) => {
    return (state.typeName === MULTIPLYING_TYPE);
  },

  getAdapter: (state) => {
    return performAction;
  }
}

export default function install() {
  addNodeRenderer(nodeRenderContrib);
  addNodeReducer(nodeReduceContrib);
}
