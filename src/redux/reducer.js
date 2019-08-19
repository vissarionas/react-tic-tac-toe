const getInitialState = () => ({
  game: ['', '', '', '', '', '', '', '', ''],
});

const getUpdatedGame = (game, position, user) => {
  const updatedGame = game;
  updatedGame[position] = user;
  return updatedGame;
};

export default (state = getInitialState(), action) => {
  switch (action.type) {
    case 'UPDATE_GAME': {
      return ({
        ...state,
        game: getUpdatedGame(state.game, action.position, 'user'),
      });
    }
    default:
      return state;
  }
};
