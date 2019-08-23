/* eslint-disable react/no-array-index-key */
import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { updateGameStatusAction } from '../redux/actions';
import Tile from './gameComponents/tile';
import './game.css';

const clickHandler = (winner, event, callback) => {
  if (!winner) callback('user', event.target.tabIndex);
};

const Game = ({ gameStatus, winner, updateGameStatus }) => (
  <div
    className="game-container"
    data-testid="game-container"
    role="button"
    tabIndex={0}
    onKeyPress={(event) => clickHandler(winner, event, updateGameStatus)}
    onClick={(event) => clickHandler(winner, event, updateGameStatus)}
  >
    {Object.keys(gameStatus).map((key) => (
      <Tile player={gameStatus[key]} index={key} key={key} />
    ))}
    <p>{winner}</p>
  </div>
);

Game.propTypes = {
  gameStatus: PropTypes.objectOf(PropTypes.string),
  winner: PropTypes.string,
  updateGameStatus: PropTypes.func.isRequired,
};

Game.defaultProps = {
  gameStatus: {},
  winner: '',
};

const mapStateToProps = (state) => ({
  gameStatus: state.gameStatus,
  winner: state.winner,
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
