/* eslint-disable react/no-array-index-key */
import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { updateGameStatusAction } from '../redux/actions';
import Tile from './gameComponents/tile';
import './game.css';

const Game = ({ gameStatus, updateGameStatus }) => (
  <div
    className="game-container"
    data-testid="game-container"
    role="button"
    tabIndex={0}
    onKeyPress={(event) => updateGameStatus('user', event.target.tabIndex)}
    onClick={(event) => updateGameStatus('user', event.target.tabIndex)}
  >
    {Object.keys(gameStatus).map((key) => (
      <Tile player={gameStatus[key]} index={key} key={key} />
    ))}
  </div>
);

Game.propTypes = {
  updateGameStatus: PropTypes.func.isRequired,
  gameStatus: PropTypes.objectOf(PropTypes.string),
};

Game.defaultProps = {
  gameStatus: {},
};

const mapStateToProps = (state) => ({
  gameStatus: state.gameStatus,
});

const mapDispatchToProps = (dispatch) => ({
  updateGameStatus: (player, position) => {
    // USER'S TURN
    dispatch(updateGameStatusAction(player, position));
    // COMPUTER'S TURN
    setTimeout(() => dispatch(updateGameStatusAction('com')), 1000);
  },
});


export default connect(mapStateToProps, mapDispatchToProps)(Game);
