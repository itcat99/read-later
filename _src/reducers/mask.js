export default (state = false, action) => {
  const { type, payload } = action;
  if (type === 'update_mask') {
    return payload;
  }

  return state;
};
