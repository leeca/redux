
// Need to make these global state .. probably not Redux "state".
// ActionRegistry should be the same one used in reducers/index.js
export const RenderRegistry = [];
export const ActionRegistry = [];

export const addAdapter = (registry, adapter) => {
  registry.push(adapter);
}

export const findAdapter = (self, registry) => {

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
