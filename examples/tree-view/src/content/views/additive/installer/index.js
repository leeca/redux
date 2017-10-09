import ActionAdpater from ../ActionAdapter
import RenderAdapter from ../RenderAdapter


const install = () => {
  actionRegistry[additive.class] = ActionAdapter;
  renderRegistry[additive.class] = RenderAdapter;
}