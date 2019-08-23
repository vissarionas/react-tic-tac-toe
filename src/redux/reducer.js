import _ from 'underscore';

const WIN_COMBINATIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const initialState = () => ({
  gameStatus: {
    0: '', 1: '', 2: '', 3: '', 4: '', 5: '', 6: '', 7: '', 8: '',
  },
});

const availablePositions = (gameStatus) => (
  Object.keys(gameStatus).filter((key) => !gameStatus[key])
);

const possibleWinCompinations = (gameStatus) => {
  const userDetectedCombinations = WIN_COMBINATIONS.filter((combination) => (
    combination.filter((position) => gameStatus[position] === 'user').length === 2
  ));
  return userDetectedCombinations.filter((combination) => (
    combination.filter((position) => gameStatus[position] === 'com').length === 0
  ));
};

const computerSelection = (gameStatus) => {
  const possibleWinCombinations = possibleWinCompinations(gameStatus);
  if (possibleWinCombinations.length) {
    return possibleWinCombinations[0].filter((position) => !gameStatus[position])[0];
  }
  return _.sample(availablePositions(gameStatus));
};

const getUpdatedGameStatus = (gameStatus, player, position) => {
  const updatedGameStatus = gameStatus;
  updatedGameStatus[position] = player;
  return updatedGameStatus;
};

export default (state = initialState(), action) => {
  switch (action.type) {
    case 'UPDATE_GAME_STATUS': {
      const { player, position = computerSelection(state.gameStatus) } = action.update;
      const updatedGameStatus = getUpdatedGameStatus(
        state.gameStatus,
        player,
        position,
      );
      return ({
        ...state,
        gameStatus: { ...updatedGameStatus },
      });
    }
    default:
      return state;
  }
};
