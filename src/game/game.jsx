/* eslint-disable react/no-array-index-key */
import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import Tile from './gameComponents/tile';
import './game.css';

const Game = ({ game }) => (
  <div className="game-container" data-testid="game-container">
    {game.map((mark, index) => <Tile mark={mark} key={index} />)}
  </div>
);

Game.propTypes = {
  game: PropTypes.arrayOf(PropTypes.string),
};

Game.defaultProps = {
  game: [],
};

const mapStateToProps = (state) => ({
  game: state.game,
});

export default connect(mapStateToProps)(Game);
