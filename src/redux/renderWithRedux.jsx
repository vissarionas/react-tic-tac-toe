import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import store from './store';

export default (Component) => render(
  <Provider store={store}>
    <Component />
  </Provider>,
);
