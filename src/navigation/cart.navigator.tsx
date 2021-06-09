import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Text from '../components/atoms/Text';
import Container from '../components/template/Container';

export type CartStackParamList = {
  Cart: undefined;
};

export enum CartStackScreenNamesEnum {
  CART = 'Cart'
}

const placeholderScreen = ({ route }: any) => (
  <Container>
    <Text>Hello {route.name}</Text>
  </Container>
);

const CartStack = createStackNavigator<CartStackParamList>();
const CartStackNavigator = (): JSX.Element => (
  <CartStack.Navigator initialRouteName={CartStackScreenNamesEnum.CART}>
    <CartStack.Screen
      options={{ headerShown: false }}
      name={CartStackScreenNamesEnum.CART}
      component={placeholderScreen}
    />
  </CartStack.Navigator>
);

export default CartStackNavigator;
