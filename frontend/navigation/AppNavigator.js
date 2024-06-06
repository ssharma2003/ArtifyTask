// navigation/AppNavigator.js

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Dashboard from '../src/screens/Dashboard';
import ProjectDetails from '../src/screens/ProjectDetails';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Dashboard">
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="ProjectDetails" component={ProjectDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
