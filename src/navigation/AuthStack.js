import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../authScreens/Home';
import Profile from '../authScreens/Profile';
import {globalColors} from '../styles/styles';

export default function AuthStack() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: globalColors.Dark,
        },
        headerTitleStyle: {
          color: globalColors.Light,
        },
        headerTintColor: globalColors.Light,
      }}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
}
