const getInitialState = () => ({
  gameStatus: ['', '', '', '', '', '', '', '', ''],
});

const getUpdatedGameStatus = (gameStatus, position, user) => {
  const updatedGameStatus = gameStatus;
  updatedGameStatus[position] = user;
  return updatedGameStatus;
};

export default (state = getInitialState(), action) => {
  switch (action.type) {
    case 'UPDATE_GAME_STATUS':
      return ({
        ...state,
        gameStatus: [...getUpdatedGameStatus(
          state.gameStatus,
          action.update.position,
          action.update.player,
        )],
      });
    default:
      return state;
  }
};
