/* eslint-disable no-undef */
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderWithRedux from './redux/testWrapper';
import App from './App';

describe('Game render', () => {
  afterEach(cleanup);

  it('renders game title', () => {
    const { getByText } = renderWithRedux(App);
    expect(getByText('Tic Tac Toe!')).toBeInTheDocument();
  });
  it('renders game container', () => {
    const { getByTestId } = renderWithRedux(App);
    expect(getByTestId('game-container')).toBeInTheDocument();
  });
  it('renders 9 game tiles', () => {
    const { getAllByTestId } = renderWithRedux(App);
    expect(getAllByTestId('game-tile')).toHaveLength(9);
  });
});
