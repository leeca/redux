import ActionAdpater from ../adapters/ActionAdapter
import RenderAdapter from ../adapters/RenderAdapter


const install = () => {
  actionRegistry.push(ActionAdapter);
  renderRegistry[additive.class] = RenderAdapter;
}
