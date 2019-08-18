import { createStore } from 'redux';
import reducer from './reducer';

const initialState = {
  title: 'Redux title!',
};

export default createStore(reducer, initialState);
