import React from 'react';
import { PropTypes } from 'prop-types';
import './tile.css';

const Tile = ({ position, mark }) => (
  <div
    role="button"
    tabIndex={position}
    className="tile"
    data-testid="game-tile"
  >
    {mark}
  </div>
);

Tile.propTypes = {
  position: PropTypes.number,
  mark: PropTypes.string,
};

Tile.defaultProps = {
  position: 0,
  mark: '',
};

export default Tile;
