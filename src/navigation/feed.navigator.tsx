import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Text from '../components/atoms/Text';
import Container from '../components/template/Container';

export type FeedStackParamList = {
  Feed: undefined;
};

export enum FeedStackScreenNamesEnum {
  FEED = 'Feed'
}

const placeholderScreen = ({ route }: any) => (
  <Container>
    <Text>Hello {route.name}</Text>
  </Container>
);

const FeedStack = createStackNavigator<FeedStackParamList>();
const FeedStackNavigator = (): JSX.Element => (
  <FeedStack.Navigator initialRouteName={FeedStackScreenNamesEnum.FEED}>
    <FeedStack.Screen
      options={{ headerShown: false }}
      name={FeedStackScreenNamesEnum.FEED}
      component={placeholderScreen}
    />
  </FeedStack.Navigator>
);

export default FeedStackNavigator;
