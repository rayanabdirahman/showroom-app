import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import Container from '../../components/templates/Container';
import {
  ShopStackParamList,
  ShopStackScreenNamesEnum
} from '../../navigation/shop.navigator';
import { brands as brandsData } from '../../sample/data';
import BrandList from '../../components/molecules/BrandList';

const ShopScreen: React.FC<
  StackScreenProps<ShopStackParamList, ShopStackScreenNamesEnum.SHOP>
> = ({ navigation }): JSX.Element => {
  const brands = brandsData;

  return (
    <Container>
      <BrandList navigation={navigation} title="Brands" data={brands} />
    </Container>
  );
};

export default ShopScreen;
