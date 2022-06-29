import React from 'react'
import { AuthScreen } from '../screens/AuthScreen/AuthScreen'
import { HomeScreen } from '../screens/HomeScreen/HomeScreen'
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
    </Stack.Navigator>
  )
}
