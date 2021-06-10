import React from 'react';
import { FlatList } from 'react-native';
import BrandThumbnail from '../../atoms/BrandThumbnail';
import Text from '../../atoms/Text';
import { brandType } from '../../../sample/data';
import { useNavigation } from '@react-navigation/native';
import { ShopStackScreenNamesEnum } from '../../../navigation/types';

type FlatListProps = Omit<FlatList['props'], 'renderItem'>;

type Props = FlatListProps & { title?: string };

const BrandList = (props: Props) => {
  const navigation = useNavigation();
  const renderItems = ({ item }: { item: brandType }) => (
    <BrandThumbnail
      onPress={() =>
        navigation.navigate(ShopStackScreenNamesEnum.PRODUCTS, {
          filterBy: item.name
        })
      }
      source={{ uri: item.logo }}
    />
  );
  return (
    <>
      <Text lg bold>
        {props.title}
      </Text>
      <FlatList
        data={props.data}
        // eslint-disable-next-line react-native/no-inline-styles
        style={{ flexGrow: 0, marginBottom: 40 }}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={renderItems}
        keyExtractor={(item) => item._id}
      />
    </>
  );
};

export default BrandList;
