export const UPDATE_GAME_STATUS = 'UPDATE_GAME_STATUS';

export const updateGameStatusAction = (position, player) => (
  { type: UPDATE_GAME_STATUS, update: { position, player } }
);
