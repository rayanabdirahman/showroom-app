import React from 'react';
import { TouchableOpacity as DefaultTouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

type Props = DefaultTouchableOpacity['props'] & {
  underline?: boolean;
  bold?: boolean;
  light?: boolean;
  brand?: boolean;
};

const Button = styled.TouchableOpacity<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom-width: ${({ underline }) => (underline ? '1px' : 0)};
  border-bottom-color: ${({ theme, underline }) =>
    underline ? theme.color.black : 'transparent'};
`;

const Text = styled.Text<Props>`
  font-size: ${({ theme }) => theme.font.size.base};
  font-family: ${({ theme, bold }) =>
    bold ? theme.font.bold : theme.font.regular};
  color: ${({ theme, light, brand }) =>
    light ? theme.color.white : brand ? theme.color.brand : theme.color.black};
`;

const Link = (props: Props): JSX.Element => (
  <Button {...props} onPress={props.onPress}>
    <Text {...props}>{props.children}</Text>
  </Button>
);

export default Link;
