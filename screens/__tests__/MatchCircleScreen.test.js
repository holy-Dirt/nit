import React from 'react';
import { render } from '@testing-library/react-native';
import MatchCircleScreen from '../MatchCircleScreen';

test('renders MatchCircleScreen', () => {
  const { getByText } = render(<MatchCircleScreen />);
  expect(getByText('Start helping')).toBeTruthy();
});
