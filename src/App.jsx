import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import GameContainer from './game/container';
import './App.css';

const App = ({ title }) => (
  <div className="App">
    <header className="App-header">
      <p>{title}</p>
      <GameContainer>
        something
      </GameContainer>
    </header>
  </div>
);

App.propTypes = {
  title: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  title: state.title,
});

export default connect(mapStateToProps)(App);
