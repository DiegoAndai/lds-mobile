import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { store, runSagas } from './store';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useFonts } from 'expo-font';


import Results from './screens/Results/Results';
import Result from './screens/Result';
import Search from './screens/Search/Search';

const Stack = createStackNavigator();

runSagas();

export default function App() {
  const [loaded] = useFonts({
    CormorantGaramond: require('./assets/fonts/CormorantGaramond-Regular.ttf'),
    Montserrat: require('./assets/fonts/Montserrat-Regular.ttf'),
  });
  
  if (!loaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Search"
            component={Search}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Results"
            component={Results}
            options={{
              headerTitle: 'Resultados',
            }}
          />
          <Stack.Screen name="Result" component={Result} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
