import React from 'react';
import styled from 'styled-components/native';

import { COLORS, SPACING, StyleUtils } from '../utils/styles';

import Text from './Text';

export default function Button({
  title, onPress, style,
}) {
  return (
    <Container
      onPress={onPress}
      style={style}
    >
      <Title>{title}</Title>
    </Container>
  );
}

const Container = styled.TouchableOpacity`
  align-items: center;
  background-color: ${COLORS.pink600};
  height: ${SPACING.xl}px;
  justify-content: center;
  ${StyleUtils.padded()}
  ${StyleUtils.rounded('lg')}
  width: 100%;
`;

const Title = styled(Text)`
  color: white;
  font-family: Montserrat;
`;
