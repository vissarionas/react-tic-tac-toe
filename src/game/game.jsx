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
    onKeyPress={(event) => updateGameStatus(event.target.tabIndex)}
    onClick={(event) => updateGameStatus(event.target.tabIndex)}
  >
    {gameStatus.map((mark, index) => (
      <Tile position={index} mark={mark} key={index} />
    ))}
  </div>
);

Game.propTypes = {
  updateGameStatus: PropTypes.func.isRequired,
  gameStatus: PropTypes.arrayOf(PropTypes.string),
};

Game.defaultProps = {
  gameStatus: [],
};

const mapStateToProps = (state) => ({
  gameStatus: state.gameStatus,
});

const mapDispatchToProps = (dispatch) => ({
  updateGameStatus: (position) => dispatch(updateGameStatusAction(position)),
});


export default connect(mapStateToProps, mapDispatchToProps)(Game);
