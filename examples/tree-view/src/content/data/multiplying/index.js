export const MULTIPLYING_TYPE = 'MULTIPLYING_TYPE';

export const create = (id) => {

  return {
    id: id,
    counter: 0,
    childIds: [],
    typeName: MULTIPLYING_TYPE
  }
}
