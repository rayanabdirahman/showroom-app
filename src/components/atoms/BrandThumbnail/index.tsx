import React from 'react';
import { Thumbnail } from 'native-base';
import { TouchableOpacity as DefaultTouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

type Props = DefaultTouchableOpacity['props'] & Thumbnail['props'];

const TouchableOpacity = styled.TouchableOpacity<
  DefaultTouchableOpacity['props']
>`
  margin-top: 24px;
  margin-right: 16px;
`;

const BrandThumbnail = (props: Props) => (
  <TouchableOpacity {...props}>
    <Thumbnail {...props} />
  </TouchableOpacity>
);

export default BrandThumbnail;
