export const ADDITIVE_TYPE = 'ADDITIVE_TYPE';

export const create = (id) => {

  return {
    id: id,
    counter: 0,
    childIds: [],
    typeName: ADDITIVE_TYPE
  }
}
