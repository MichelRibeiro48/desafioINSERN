import React from 'react';
import {View, Text} from 'react-native';
import VoiceTest from './src/components/VoiceRecorder';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './src/pages/Login';
import Home from './src/pages/Home';
import CodesPage from './src/pages/CodesPage';
import HistoricPage from './src/pages/HistoricPage';
import TabRoutes from './src/service/TabRoutes';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={TabRoutes} />
        <Stack.Screen name="CodesPage" component={TabRoutes} />
        <Stack.Screen name="HistoricPage" component={TabRoutes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
