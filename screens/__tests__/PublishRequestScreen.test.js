import React from 'react';
import { render } from '@testing-library/react-native';
import PublishRequestScreen from '../PublishRequestScreen';

test('renders PublishRequestScreen', () => {
  const { getByText } = render(<PublishRequestScreen />);
  expect(getByText('Publish')).toBeTruthy();
});
