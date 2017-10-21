import { ActionRegistry, RenderRegistry, addAdapter } from '../../cms-registry'

import ActionAdpater from '../adapters/ActionAdapter'
import RenderAdapter from '../adapters/RenderAdapter'

const install = () => {
  addAdapter(ActionRegistry, ActionAdapter);
  addAdapter(RenderRegistry, RenderAdapter);
}
