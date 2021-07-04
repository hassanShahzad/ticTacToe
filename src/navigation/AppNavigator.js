import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import GameScreen from '../screens/GameScreen';

const Stack = createStackNavigator();
function AppNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="GameScreen" component={GameScreen} />
    </Stack.Navigator>
  );
}

export default AppNavigator;
