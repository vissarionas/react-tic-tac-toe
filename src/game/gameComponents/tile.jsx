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
  index: PropTypes.number,
  player: PropTypes.string,
};

Tile.defaultProps = {
  index: 0,
  player: '',
};

export default Tile;
