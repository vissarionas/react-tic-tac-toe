import React from 'react';
import { PropTypes } from 'prop-types';
import './tile.css';

const Tile = ({ mark }) => (
  <div className="tile" data-testid="game-tile">
    {mark}
  </div>
);

Tile.propTypes = {
  mark: PropTypes.string,
};

Tile.defaultProps = {
  mark: '',
};

export default Tile;
