import * as actions from '../actions'

const ActionAdapter = {

  accepts(item) {
    return item.typeName === multiplying.class
  }

  getActions() {
    return actions;
  }
}

default export ActionAdapter;
