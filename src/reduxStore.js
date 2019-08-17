import { createStore } from 'redux';

const initialState = {
  title: 'Redux title!!',
};

const reducer = (state = initialState, action) => {
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

export default createStore(reducer, initialState);
