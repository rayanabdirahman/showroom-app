import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AccountScreen } from '../screens';
import { AccountStackParamList, AccountStackScreenNamesEnum } from './types';

const AccountStack = createStackNavigator<AccountStackParamList>();
const AccountStackNavigator = (): JSX.Element => (
  <AccountStack.Navigator
    initialRouteName={AccountStackScreenNamesEnum.ACCOUNT}
  >
    <AccountStack.Screen
      options={{ headerShown: false }}
      name={AccountStackScreenNamesEnum.ACCOUNT}
      component={AccountScreen}
    />
  </AccountStack.Navigator>
);

export default AccountStackNavigator;
