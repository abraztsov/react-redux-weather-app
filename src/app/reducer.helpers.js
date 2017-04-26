export const returnActionPayload = (state, action) => action.payload;

export const removeItemFromArray = (array, predicate) => {
  const itemIndex = array.findIndex(predicate);
  if (itemIndex !== -1) {
    array.splice(itemIndex, 1);
  }
  return [...array];
};

export const addToArray = (array = [], item) => array.concat(item);
