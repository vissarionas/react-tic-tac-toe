import { createStore } from 'redux';
import reducer from './reducer';

const initialState = {
  game: ['', '', '', '', '', '', '', '', ''],
};

export default createStore(reducer, initialState);
