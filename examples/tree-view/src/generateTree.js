import { create as createAdditive } from './content/data/additive';
import { create as createMultiplying } from './content/data/multiplying';

export default function generateTree() {
  let tree = {
    0: createData(0)
  }

  for (let i = 1; i < 100; i++) {
    let parentId = Math.floor(Math.pow(Math.random(), 2) * i)
    tree[i] = createData(i);
    tree[parentId].childIds.push(i)
  }

  return tree
}

const createData = (id) => {
  if (Math.random() > 0.5) {
    return createMultiplying(id);
  }

  return createAdditive(id);
}
