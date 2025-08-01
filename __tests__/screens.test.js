import React from 'react';
import { render } from '@testing-library/react-native';

import PublishRequestScreen from '../screens/PublishRequestScreen';
import MatchCircleScreen from '../screens/MatchCircleScreen';
import KarmaScreen from '../screens/KarmaScreen';
import { KarmaProvider } from '../context/KarmaContext';

describe('screens render', () => {
  it('PublishRequestScreen', () => {
    render(
      <KarmaProvider>
        <PublishRequestScreen navigation={{ navigate: jest.fn() }} />
      </KarmaProvider>
    );
  });

  it('MatchCircleScreen', () => {
    render(
      <KarmaProvider>
        <MatchCircleScreen navigation={{ navigate: jest.fn() }} />
      </KarmaProvider>
    );
  });

  it('KarmaScreen', () => {
    render(
      <KarmaProvider>
        <KarmaScreen />
      </KarmaProvider>
    );
  });
});
