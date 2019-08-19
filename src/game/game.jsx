/* eslint-disable react/no-array-index-key */
import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { updateGameAction } from '../redux/actions';
import Tile from './gameComponents/tile';
import './game.css';

const Game = ({ game, updateGame }) => {
  console.log(game);
  return (
    <div
      className="game-container"
      data-testid="game-container"
      onClick={(event) => updateGame(event.target.tabIndex)}
    >
      {game.map((mark, index) => {
        return (
          <Tile position={index} mark={mark} key={index} />
        );
      })}
    </div>
  );
};

Game.propTypes = {
  game: PropTypes.arrayOf(PropTypes.string),
};

Game.defaultProps = {
  game: [],
};

const mapStateToProps = (state) => ({
  game: state.game,
});

const mapDispatchToProps = (dispatch) => ({
  updateGame: (position) => dispatch(updateGameAction(position)),
});


export default connect(mapStateToProps, mapDispatchToProps)(Game);
