import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import Text from '../../components/atoms/Text';
import Container from '../../components/templates/Container';
import {
  AccountStackParamList,
  AccountStackScreenNamesEnum
} from '../../navigation/account.navigator';

const AccountScreen: React.FC<
  StackScreenProps<AccountStackParamList, AccountStackScreenNamesEnum.ACCOUNT>
> = ({ route }): JSX.Element => (
  <Container>
    <Text>{route.name}</Text>
  </Container>
);

export default AccountScreen;
