import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import UpdateRecipe from '../screens/UpdateRecipe';

const Stack = createStackNavigator();

const UpdateStackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="UpdateRecipe" component={UpdateRecipe} />
  </Stack.Navigator>
);

export default UpdateStackNavigator;
