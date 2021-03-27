import React, { useState } from 'react';
import styled from 'styled-components/native';
import { Video } from 'expo-av';
import Text from '../components/Text';
import { StyleUtils } from '../utils/styles';
import useNavigationTitle from '../hooks/use-navigation-title';

export default function Result({ route: { params } }) {
  const [loading, setLoading] = useState(false);
  const {
    item: {
      attributes: {
        concept,
        video_url: uri
      } = {}
    } = {}
  } = params;

  useNavigationTitle(concept);

  return (
    <Container>
      {
        loading && (
          <MessageContainer>
            <Text>Cargando...</Text>
          </MessageContainer>
        )
      }
      <VideoContainer>
      <StyledVideo
          source={{ uri }}
          resizeMode="contain"
          isLooping
          useNativeControls
          onLoadStart={() => setLoading(true)}
          onLoad={() => setLoading(false)}
        />
      </VideoContainer>
    </Container>
  );
}

const MessageContainer = styled.View`
  ${StyleUtils.padded()}
  align-items: center;
`

const Container = styled.SafeAreaView`
  align-items: center;
`

const VideoContainer = styled.View`
  height: 100%;
  width: 100%;
`

const StyledVideo = styled(Video)`
  height: 100%;
  width: 100%;
`