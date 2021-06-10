import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import Container from '../../components/templates/Container';
import {
  ShopStackParamList,
  ShopStackScreenNamesEnum
} from '../../navigation/types';
import { brands as brandsData } from '../../sample/data';
import BrandList from '../../components/molecules/BrandList';

const ShopScreen: React.FC<
  StackScreenProps<ShopStackParamList, ShopStackScreenNamesEnum.SHOP>
> = ({}): JSX.Element => {
  const brands = brandsData;

  return (
    <Container>
      <BrandList title="Brands" data={brands} />
    </Container>
  );
};

export default ShopScreen;
