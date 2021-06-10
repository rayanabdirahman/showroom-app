import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import Text from '../../components/atoms/Text';
import Container from '../../components/templates/Container';
import {
  CartStackParamList,
  CartStackScreenNamesEnum
} from '../../navigation/types';

const CartScreen: React.FC<
  StackScreenProps<CartStackParamList, CartStackScreenNamesEnum.CART>
> = ({ route }): JSX.Element => (
  <Container>
    <Text>{route.name}</Text>
  </Container>
);

export default CartScreen;
