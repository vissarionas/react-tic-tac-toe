/* eslint-disable no-undef */
import testWrapper from '../redux/testWrapper';
import Game from './game';

describe('Game', () => {
  it('renders 9 tiles', () => {
    const { getAllByTestId } = testWrapper(Game);
    const gameTiles = getAllByTestId('game-tile');
    expect(gameTiles).toHaveLength(9);
  });
});
