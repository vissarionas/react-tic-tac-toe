import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';

const App = ({ title }) => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>{title}</p>
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
