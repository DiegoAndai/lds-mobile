import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import styled from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons';

import Text from '../../components/Text';
import { COLORS, StyleUtils } from '../../utils/styles';
import { isEmpty } from 'lodash';

export default function Results({ navigation, route: { params: { search } = {} } }) {
  const [searching, setSearching] = useState(false);
  const [results, setResults] = useState([]);

  const getResults = useCallback((search) => {
    setSearching(true);
    axios.get('https://pl-lds-server-staging.herokuapp.com/api/v1/entries', { params: { search }})
      .then(response => {
        setResults(response.data.data);
        setSearching(false);
      })
  }, [setResults])

  useEffect(() => getResults(search), [getResults, search]);

  if (searching) {
    return (
      <MessageContainer>
        <Text>Buscando...</Text>
      </MessageContainer>
    )
  }

  if (isEmpty(results)) {
    return (
      <MessageContainer>
        <Text>No se encontraron resultados 😿</Text>
      </MessageContainer>
    )
  }

  return (
    <Container>
      <SearchedTermContainer>
        <SearchedTerm>Resultados para "{search}"</SearchedTerm>
      </SearchedTermContainer>
      <FlatList
        data={results}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <ResultButton
            onPress={() => navigation.navigate("Result", { item })}
          >
            <ResultContainer>
              <ResultText>
                {item.attributes.concept}
              </ResultText>
              <Ionicons
                name="ios-arrow-forward"
                size={20}
                color="#9CA3AF"
              />
            </ResultContainer>
          </ResultButton>
        )}
        />
    </Container>
  );
}

const Container = styled.SafeAreaView`
  background-color: white;
`

const MessageContainer = styled.View`
  ${StyleUtils.padded()}
  align-items: center;
`

const SearchedTermContainer = styled.View`
  ${StyleUtils.padded()}
`

const SearchedTerm = styled(Text)`
  color: ${COLORS.gray500}
  ${StyleUtils.fontSize('sm')}
`

const ResultContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

const ResultText = styled(Text)`
`

const ResultButton = styled.TouchableOpacity`
  ${StyleUtils.padded()}
`