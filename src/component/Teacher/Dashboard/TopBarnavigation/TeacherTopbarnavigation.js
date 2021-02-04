import React from'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import PersonalInformation from './Personalinfo';
import SettingsScreen from './TestScreen';
import {
    NavigationContainer,
    DarkTheme,
    DefaultTheme,
  } from '@react-navigation/native';

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
     <NavigationContainer
     independent ={true}
     >
    <Tab.Navigator
      initialRouteName="personalinformation"
      tabBarOptions={{
        activeTintColor: '#e91e63',
        labelStyle: { fontSize: 12 },
        style: { backgroundColor: 'powderblue' },
      }}
    >
       <Tab.Screen
        name="personalinformation"
        component={PersonalInformation}
        options={{ tabBarLabel: 'Personl information' }}
      />
      <Tab.Screen
        name="Feed"
        component={SettingsScreen}
        options={{ tabBarLabel: 'Home' }}
      />
     
    </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MyTabs