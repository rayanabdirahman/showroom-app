import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Text from '../components/atoms/Text';
import Container from '../components/template/Container';

export type ShopStackParamList = {
  Shop: undefined;
};

export enum ShopStackScreenNamesEnum {
  SHOP = 'Shop'
}

const placeholderScreen = ({ route }: any) => (
  <Container>
    <Text>Hello {route.name}</Text>
  </Container>
);

const ShopStack = createStackNavigator<ShopStackParamList>();
const ShopStackNavigator = (): JSX.Element => (
  <ShopStack.Navigator initialRouteName={ShopStackScreenNamesEnum.SHOP}>
    <ShopStack.Screen
      options={{ headerShown: false }}
      name={ShopStackScreenNamesEnum.SHOP}
      component={placeholderScreen}
    />
  </ShopStack.Navigator>
);

export default ShopStackNavigator;
