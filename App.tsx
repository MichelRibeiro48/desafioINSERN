import React from 'react';
import {View, Text} from 'react-native';
import VoiceTest from './src/components/VoiceRecorder';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './src/pages/Login';
import Home from './src/pages/Home';
import CodesPage from './src/pages/CodesPage';
import HistoricPage from './src/pages/HistoricPage';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="CodesPage" component={CodesPage} />
        <Stack.Screen name="HistoricPage" component={HistoricPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
