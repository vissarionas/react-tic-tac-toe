/* eslint-disable no-undef */
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderWithRedux from './redux/testWrapper';
import App from './App';

describe('Game render', () => {
  afterEach(cleanup);

  it('renders game', () => {
    const { getByText, getByTestId, getAllByTestId } = renderWithRedux(App);
    expect(getByText('Tic Tac Toe')).toBeInTheDocument();
    expect(getByTestId('game-container')).toBeInTheDocument();
    expect(getAllByTestId('game-tile')).toHaveLength(9);
  });
});
