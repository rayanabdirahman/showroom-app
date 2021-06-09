import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Text from '../components/atoms/Text';
import Container from '../components/template/Container';

export type AccountStackParamList = {
  Account: undefined;
};

export enum AccountStackScreenNamesEnum {
  ACCOUNT = 'Account'
}

const placeholderScreen = ({ route }: any) => (
  <Container>
    <Text>Hello {route.name}</Text>
  </Container>
);

const AccountStack = createStackNavigator<AccountStackParamList>();
const AccountStackNavigator = (): JSX.Element => (
  <AccountStack.Navigator
    initialRouteName={AccountStackScreenNamesEnum.ACCOUNT}
  >
    <AccountStack.Screen
      options={{ headerShown: false }}
      name={AccountStackScreenNamesEnum.ACCOUNT}
      component={placeholderScreen}
    />
  </AccountStack.Navigator>
);

export default AccountStackNavigator;
