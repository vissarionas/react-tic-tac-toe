import React from 'react';
import { PropTypes } from 'prop-types';
import './tile.css';

const Tile = ({ mark }) => (
  <span
    className="container"
    data-testid="game-tile"
  >
    {mark}
  </span>
);

Tile.propTypes = {
  mark: PropTypes.string,
};

Tile.defaultProps = {
  mark: '',
};

export default Tile;
