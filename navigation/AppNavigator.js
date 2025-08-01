import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/HomeScreen';
import PublishRequestScreen from '../screens/PublishRequestScreen';
import MatchCircleScreen from '../screens/MatchCircleScreen';
import KarmaScreen from '../screens/KarmaScreen';

const Tab = createBottomTabNavigator();
const PublishStack = createNativeStackNavigator();

function PublishStackScreen() {
  return (
    <PublishStack.Navigator>
      <PublishStack.Screen
        name="PublishRequest"
        component={PublishRequestScreen}
        options={{ title: 'Publish' }}
      />
      <PublishStack.Screen
        name="MatchCircle"
        component={MatchCircleScreen}
        options={{ title: 'Match Peers' }}
      />
    </PublishStack.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen
          name="Publish"
          component={PublishStackScreen}
          options={{ headerShown: false }}
        />
        <Tab.Screen name="Profile" component={KarmaScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
