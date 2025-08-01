import React from 'react';
import AppNavigator from './navigation/AppNavigator';
import { KarmaProvider } from './context/KarmaContext';

export default function App() {
  return (
    <KarmaProvider>
      <AppNavigator />
    </KarmaProvider>
  );
}
