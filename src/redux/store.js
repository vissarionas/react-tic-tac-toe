import { createStore } from 'redux';
import reducer from './reducer';

const initialState = {
  title: 'Tic Tac Toe!',
  game: ['', '', '', '', '', '', '', '', ''],
};

export default createStore(reducer, initialState);
