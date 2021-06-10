import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { FeedScreen } from '../screens';

export type FeedStackParamList = {
  Feed: undefined;
};

export enum FeedStackScreenNamesEnum {
  FEED = 'Feed'
}

const FeedStack = createStackNavigator<FeedStackParamList>();
const FeedStackNavigator = (): JSX.Element => (
  <FeedStack.Navigator initialRouteName={FeedStackScreenNamesEnum.FEED}>
    <FeedStack.Screen
      options={{ headerShown: false }}
      name={FeedStackScreenNamesEnum.FEED}
      component={FeedScreen}
    />
  </FeedStack.Navigator>
);

export default FeedStackNavigator;
