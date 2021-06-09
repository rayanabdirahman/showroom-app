import { Text as DefaultText } from 'react-native';
import styled from 'styled-components/native';

type Props = DefaultText['props'] & {
  xxl?: boolean;
  xl?: boolean;
  lg?: boolean;
  sm?: boolean;
  bold?: boolean;
  medium?: boolean;
};

const Text = styled.Text<Props>`
  font-family: ${({ theme, bold, medium }) =>
    bold ? theme.font.bold : medium ? theme.font.medium : theme.font.regular};
  font-size: ${({ theme, lg, sm }) =>
    lg ? theme.font.size.lg : sm ? theme.font.size.sm : theme.font.size.base};
`;

export default Text;
