import React from 'react';
import { PropTypes } from 'prop-types';
import './container.css';

const GameContainer = ({ children }) => (
  <p
    className="container"
    data-testid="game-container"
  >
    {children}
  </p>
);

GameContainer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
  ]),
};

GameContainer.defaultProps = {
  children: 'empty game container',
};

export default GameContainer;
