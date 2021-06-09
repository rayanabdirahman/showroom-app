import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Colors from '../constants/Colors';
import Icon from '../components/atoms/Icon';
import ShopStackNavigator from './shop.navigator';
import FeedStackNavigator from './feed.navigator';
import CartStackNavigator from './cart.navigator';
import AccountStackNavigator from './account.navigator';

export type BottomTabParamList = {
  Shop: undefined;
  Feed: undefined;
  Cart: undefined;
  Account: undefined;
};

export enum BottomTabScreenNameEnum {
  SHOP = 'Shop',
  FEED = 'Feed',
  CART = 'Cart',
  ACCOUNT = 'Account'
}

const BottomTab = createBottomTabNavigator<BottomTabParamList>();
const BottomTabNavigator = (): JSX.Element => (
  <BottomTab.Navigator
    initialRouteName={BottomTabScreenNameEnum.SHOP}
    tabBarOptions={{
      activeTintColor: Colors.brand,
      inactiveTintColor: Colors.darkgrey,
      showLabel: false
    }}
  >
    <BottomTab.Screen
      name={BottomTabScreenNameEnum.SHOP}
      component={ShopStackNavigator}
      options={{
        tabBarIcon: ({ color }: { color: string }) => (
          <Icon name="pricetags-outline" color={color} />
        )
      }}
    />
    <BottomTab.Screen
      name={BottomTabScreenNameEnum.FEED}
      component={FeedStackNavigator}
      options={{
        tabBarIcon: ({ color }: { color: string }) => (
          <Icon name="globe-outline" color={color} />
        )
      }}
    />
    <BottomTab.Screen
      name={BottomTabScreenNameEnum.CART}
      component={CartStackNavigator}
      options={{
        tabBarIcon: ({ color }: { color: string }) => (
          <Icon name="cart-outline" color={color} />
        )
      }}
    />
    <BottomTab.Screen
      name={BottomTabScreenNameEnum.ACCOUNT}
      component={AccountStackNavigator}
      options={{
        tabBarIcon: ({ color }: { color: string }) => (
          <Icon name="person-outline" color={color} />
        )
      }}
    />
  </BottomTab.Navigator>
);

export default BottomTabNavigator;
