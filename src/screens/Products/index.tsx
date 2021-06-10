import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import Text from '../../components/atoms/Text';
import Container from '../../components/templates/Container';
import {
  ShopStackParamList,
  ShopStackScreenNamesEnum
} from '../../navigation/shop.navigator';

const ProductsScreen: React.FC<
  StackScreenProps<ShopStackParamList, ShopStackScreenNamesEnum.PRODUCTS>
> = ({ route }): JSX.Element => (
  <Container>
    <Text>{route.name}</Text>
  </Container>
);

export default ProductsScreen;
