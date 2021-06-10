import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ProductsScreen, ShopScreen } from '../screens';
import Colors from '../constants/Colors';

export type ShopStackParamList = {
  Shop: undefined;
  Products: { filterBy: string };
};

export enum ShopStackScreenNamesEnum {
  SHOP = 'Shop',
  PRODUCTS = 'Products'
}

const ShopStack = createStackNavigator<ShopStackParamList>();
const ShopStackNavigator = (): JSX.Element => (
  <ShopStack.Navigator
    screenOptions={{
      headerBackTitle: ' ',
      headerTintColor: Colors.black
    }}
    initialRouteName={ShopStackScreenNamesEnum.SHOP}
  >
    <ShopStack.Screen
      options={{ headerShown: false }}
      name={ShopStackScreenNamesEnum.SHOP}
      component={ShopScreen}
    />
    <ShopStack.Screen
      options={({ route }) => ({ title: route.params.filterBy })}
      name={ShopStackScreenNamesEnum.PRODUCTS}
      component={ProductsScreen}
    />
  </ShopStack.Navigator>
);

export default ShopStackNavigator;
