/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import SplashScreen from './src/page/SplashScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUp from './src/page/SignUp';
import SignIn from './src/page/SignIn';

const Stack = createNativeStackNavigator();


function App(): JSX.Element {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='SplashScreen' // nom
          component={SplashScreen} // composent de référence (à importer)
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='SignUp' // nom
          component={SignUp} // composent de référence (à importer)
        />
        <Stack.Screen
          name='SignIn' // nom
          component={SignIn} // composent de référence (à importer)
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
