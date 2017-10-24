import { ADDITIVE_TYPE } from '../../../data/additive';

import { addNodeRenderer } from '../../../../containers/Node';
import { addNodeReducer } from '../../../../reducers';

import { ConnectedAdditiveNode, performAction } from '../reducers';

const nodeRenderContrib = {
  accepts: (state) => {
    return (state.classTag === ADDITIVE_TYPE);
  },

  getAdapter: (state) => {
    return ConnectedAdditiveNode;
  }
}

const nodeReduceContrib = {
    accepts: (state) => {
      return (state.classTag === ADDITIVE_TYPE);
    },

    getAdapter: (state) => {
      return performAction;
    }
  }

export default function install() {
  addNodeRenderer(nodeRenderContrib);
  addNodeReducer(nodeReduceContrib);
}
