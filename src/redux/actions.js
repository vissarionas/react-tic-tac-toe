export const UPDATE_GAME_STATUS = 'UPDATE_GAME_STATUS';

export const updateGameStatusAction = (player, position) => (
  { type: UPDATE_GAME_STATUS, update: { player, position } }
);
