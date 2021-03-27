import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { KeyboardAvoidingView } from 'react-native';
import styled from 'styled-components/native';
import Button from '../../components/Button';
import { COLORS, StyleUtils } from '../../utils/styles';
import ScrollableScreen from '../ScrollableScreen';

export default function Search() {
  const [search, setSearch] = useState('');
  const navigation = useNavigation();

  function miFuncion() {
    navigation.navigate('Results', { search })
  }

  return (
    <ScrollableScreen>
      <Container>
        <Input
          value={search}
          onChangeText={setSearch}
          placeholder="Buscar"
          selectionColor={COLORS.pink600}
        />
        {
          !!search && <SpacedButton title='Buscar' onPress={miFuncion}/>
        }
      </Container>
    </ScrollableScreen>
  );
}

const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  ${StyleUtils.spaced()}
`

const Input = styled.TextInput`
  font-family: CormorantGaramond;
  ${StyleUtils.fontSize('xl')}
  border-bottom-width: 0.5px;
  border-color: #374151;
  margin: 10px;
  padding: 10px;
`

const SpacedButton = styled(Button)`
  ${StyleUtils.spacedTop()}
`
