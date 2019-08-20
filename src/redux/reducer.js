import _ from 'underscore';

const getInitialState = () => ({
  gameStatus: ['', '', '', '', '', '', '', '', ''],
  availablePositions: [0, 1, 2, 3, 4, 5, 6, 7, 8],
});

const getAvailablePositions = (availablePositions, gameStatus) => (
  availablePositions.filter((position) => !gameStatus[position])
);

const getUpdatedGameStatus = (gameStatus, player, position) => {
  const updatedGameStatus = gameStatus;
  updatedGameStatus[position] = player;
  return updatedGameStatus;
};

export default (state = getInitialState(), action) => {
  switch (action.type) {
    case 'UPDATE_GAME_STATUS': {
      const { player, position = _.sample(state.availablePositions) } = action.update;
      const updatedGameStatus = getUpdatedGameStatus(
        state.gameStatus,
        player,
        position,
      );
      return ({
        ...state,
        gameStatus: [...updatedGameStatus],
        availablePositions: getAvailablePositions(state.availablePositions, updatedGameStatus),
      });
    }
    default:
      return state;
  }
};
