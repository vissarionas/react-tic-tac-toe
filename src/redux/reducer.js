export default (state, action) => {
  switch (action.type) {
    case 'UPDATE_TITLE':
      return ({
        ...state,
        title: action.data,
      });
    default:
      return state;
  }
};
