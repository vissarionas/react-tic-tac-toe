import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import Game from './game/game';
import './App.css';

const App = ({ title }) => (
  <div className="App">
    <header className="App-header">
      <p>{title}</p>
      <Game />
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
