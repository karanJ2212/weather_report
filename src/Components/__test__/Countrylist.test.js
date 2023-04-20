import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../../Redux/Store';

import Countrylist from '../Countrylist/Countrylist';

describe('Testing Countries component', () => {
  test('Testing the dom for success rendering elements on Countries component', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Countrylist />
      </Provider>,
    );
    expect(getByTestId('countries-wrapper')).toBeInTheDocument();
  });
  test('Testing the dom for non existing elemente on the page after rendering', () => {
    const { queryByTestId } = render(
      <Provider store={store}>
        <Countrylist />
      </Provider>,
    );
    expect(queryByTestId('nothing')).toBeNull();
  });
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Countrylist />
        </Provider>,

      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
