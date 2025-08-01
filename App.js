import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './navigation/AppNavigator';
import { KarmaProvider } from './context/KarmaContext';

export default function App() {
  return (
    <KarmaProvider>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </KarmaProvider>
  );
}

