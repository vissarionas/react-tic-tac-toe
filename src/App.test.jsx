/* eslint-disable no-undef */
import '@testing-library/jest-dom/extend-expect';
import wrapWithRedux from './redux/testWrapper';
import App from './App';

it('renders without crashing', () => {
  const { getByText } = wrapWithRedux(App);
  expect(getByText('Redux title!')).toBeInTheDocument();
});
