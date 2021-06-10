import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import Text from '../../components/atoms/Text';
import Container from '../../components/templates/Container';
import {
  FeedStackParamList,
  FeedStackScreenNamesEnum
} from '../../navigation/types';

const FeedScreen: React.FC<
  StackScreenProps<FeedStackParamList, FeedStackScreenNamesEnum.FEED>
> = ({ route }): JSX.Element => (
  <Container>
    <Text>{route.name}</Text>
  </Container>
);

export default FeedScreen;
