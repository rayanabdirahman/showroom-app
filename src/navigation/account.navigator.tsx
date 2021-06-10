import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AccountScreen } from '../screens';

export type AccountStackParamList = {
  Account: undefined;
};

export enum AccountStackScreenNamesEnum {
  ACCOUNT = 'Account'
}

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
