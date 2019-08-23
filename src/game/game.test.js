/* eslint-disable no-undef */
import { fireEvent, cleanup } from '@testing-library/react';
import renderWithRedux from '../redux/renderWithRedux';
import '@testing-library/jest-dom/extend-expect';
import Game from './game';

describe('Game', () => {
  afterEach(cleanup);

  it('renders 9 tiles', () => {
    const { getAllByTestId } = renderWithRedux(Game);
    const gameTiles = getAllByTestId('game-tile');
    expect(gameTiles).toHaveLength(9);
  });
  it('updates the game', () => {
    const { getAllByTestId, getByText } = renderWithRedux(Game);
    const gameTiles = getAllByTestId('game-tile');
    fireEvent.click(gameTiles[0]);
    expect(getByText('user')).toBeInTheDocument();
  });
});
