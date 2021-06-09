import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabNavigator from './tabs.navigator';

const Stack = createStackNavigator();
const AppNavigator = (): JSX.Element => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name={'root'} component={BottomTabNavigator} />
  </Stack.Navigator>
);

export default AppNavigator;
