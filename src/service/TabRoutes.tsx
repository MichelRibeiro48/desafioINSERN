import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../pages/Home';
import CodesPage from '../pages/CodesPage';
import HistoricPage from '../pages/HistoricPage';
import Icon from 'react-native-vector-icons/Entypo';
import VoiceTest from '../components/VoiceRecorder';

const Tab = createBottomTabNavigator();
export default function TabRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {backgroundColor: '#221C3E', borderTopColor: '#221C3E'},
        tabBarShowLabel: false,
        tabBarActiveTintColor: 'white',
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({size, color}) => (
            <Icon name={'home'} size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="CodesPage"
        component={CodesPage}
        options={{
          tabBarIcon: ({size, color}) => (
            <Icon name={'old-phone'} size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="HistoricPage"
        component={HistoricPage}
        options={{
          tabBarIcon: ({size, color}) => (
            <Icon name={'menu'} size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
