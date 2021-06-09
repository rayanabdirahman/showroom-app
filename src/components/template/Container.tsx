import { View as DefaultView } from 'react-native';
import styled from 'styled-components/native';

type Props = DefaultView['props'] & {
  WithOutPadding?: boolean;
};

const Container = styled.View<Props>`
  flex: 1;
  background-color: ${({ theme }) => theme.color.white};
  padding: ${({ WithOutPadding }) =>
    WithOutPadding ? '0px' : '24px 20px 0px'};
`;

export default Container;
