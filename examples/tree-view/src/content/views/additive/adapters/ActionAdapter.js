import * as actions from '../actions'


const ActionAdapter = {
  accepts(item) {
    return item.typeName === additive.class
  }

  getActions() {
    return actions;
  }
};

default export ActionAdapter;
