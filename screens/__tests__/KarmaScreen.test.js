import React from 'react';
import { render } from '@testing-library/react-native';
import KarmaScreen from '../KarmaScreen';

test('renders KarmaScreen', () => {
  const { getByText } = render(<KarmaScreen />);
  expect(getByText(/Karma/)).toBeTruthy();
});
