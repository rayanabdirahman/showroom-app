import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { StyleProp, TextStyle } from 'react-native';
import styled from 'styled-components/native';

type Props = {
  name: string | any;
  color?: string;
  size?: number;
  style?: StyleProp<TextStyle>;
};

const StyledIonicons = styled(Ionicons)<Props>`
  font-size: ${({ size }) => (size ? size : '24px')};
  color: ${({ color, theme }) => (color ? color : theme.color.black)};
  margin-bottom: -3px;
`;

const Icon = (props: Props): JSX.Element => <StyledIonicons {...props} />;

export default Icon;
