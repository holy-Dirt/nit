import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/HomeScreen';
import PublishRequestScreen from '../screens/PublishRequestScreen';
import MatchCircleScreen from '../screens/MatchCircleScreen';
import KarmaScreen from '../screens/KarmaScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Publish" component={PublishRequestScreen} />
      <Tab.Screen name="Profile" component={KarmaScreen} />
    </Tab.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Tabs" component={Tabs} />
        <Stack.Screen name="MatchCircle" component={MatchCircleScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
