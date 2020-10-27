import React, { useState } from 'react';
import { Button } from 'react-native';
import styled from 'styled-components/native';

export default function Search() {
  const [search, setSearch] = useState('');

  function miFuncion() {
    console.log(`Buscar ${search}`);
  }

  return (
    <Container>
      <Input
        value={search}
        onChangeText={setSearch}
      />
      <Button title='Buscar' onPress={miFuncion}/>
    </Container>
  );
}

const Container = styled.SafeAreaView`
  height: 100%;
  justify-content: center;
`

const Input = styled.TextInput`
  border-bottom-width: 1px;
  border-color: black;
  margin: 10px;
  padding: 10px;
`
