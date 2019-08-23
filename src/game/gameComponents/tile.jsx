import React from 'react';
import { PropTypes } from 'prop-types';
import './tile.css';

const Tile = ({ index, player }) => (
  <div
    role="button"
    tabIndex={index}
    className="tile"
    data-testid="game-tile"
  >
    {player}
  </div>
);

Tile.propTypes = {
  index: PropTypes.string.isRequired,
  player: PropTypes.string,
};

Tile.defaultProps = {
  player: '',
};

export default Tile;
