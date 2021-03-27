import React from 'react';
import {
  KeyboardAvoidingView, Platform, ScrollView,
} from 'react-native';
import { useHeaderHeight } from '@react-navigation/stack';

import AppScreen from './AppScreen';

function SetUpScrollView({ children }) {
  return (
    <ScrollView
      keyboardShouldPersistTaps='handled'
      style={{
        height: '100%',
      }}
      contentContainerStyle={{
        flexGrow: 1,
      }}
    >
      { children }
    </ScrollView>
  );
}

export default function ScrollableScreen({ children, ...rest }) {
  const headerHeight = useHeaderHeight();

  return Platform.OS === 'ios' ? (
    <AppScreen {...rest}>
      <KeyboardAvoidingView
        behavior="padding"
        keyboardVerticalOffset={headerHeight}
      >
        <SetUpScrollView>
          { children }
        </SetUpScrollView>
      </KeyboardAvoidingView>
    </AppScreen>
  ) : (
    <AppScreen {...rest}>
      <SetUpScrollView>
        { children }
      </SetUpScrollView>
    </AppScreen>
  );
}
