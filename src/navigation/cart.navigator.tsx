import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { CartScreen } from '../screens';

export type CartStackParamList = {
  Cart: undefined;
};

export enum CartStackScreenNamesEnum {
  CART = 'Cart'
}

const CartStack = createStackNavigator<CartStackParamList>();
const CartStackNavigator = (): JSX.Element => (
  <CartStack.Navigator initialRouteName={CartStackScreenNamesEnum.CART}>
    <CartStack.Screen
      options={{ headerShown: false }}
      name={CartStackScreenNamesEnum.CART}
      component={CartScreen}
    />
  </CartStack.Navigator>
);

export default CartStackNavigator;
