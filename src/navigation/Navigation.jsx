import React from 'react'
import { AuthScreen } from '../screens/AuthScreen/AuthScreen'
import { HomeScreen } from '../screens/HomeScreen/HomeScreen'
import { MapScreen } from '../screens/MapScreen/MapScreen'
import { FoodScreen } from '../screens/FoodScreen/FoodScreen'
import { CartScreen } from '../screens/CartScreen/CartScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

export const Navigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Auth" component={AuthScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Map" component={MapScreen} />
      <Stack.Screen name="Food" component={FoodScreen} />
      <Stack.Screen name="Cart" component={CartScreen} />
    </Stack.Navigator>
  )
}
