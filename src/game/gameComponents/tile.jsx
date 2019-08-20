import React from 'react';
import { PropTypes } from 'prop-types';
import './tile.css';

const Tile = ({ position, player }) => (
  <div
    role="button"
    tabIndex={position}
    className="tile"
    data-testid="game-tile"
  >
    {player}
  </div>
);

Tile.propTypes = {
  position: PropTypes.number,
  player: PropTypes.string,
};

Tile.defaultProps = {
  position: 0,
  player: '',
};

export default Tile;
