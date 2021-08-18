import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import AddOrEditScreen from '../screens/AddOrEditScreen';
import {SCREEN_NAMES} from '../constants/Constant';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={SCREEN_NAMES.HOME_SCREEN} component={HomeScreen} />
      <Stack.Screen
        name={SCREEN_NAMES.ADD_OR_EDIT_SCREEN}
        component={AddOrEditScreen}
      />
    </Stack.Navigator>
  );
};

export default Navigation;
