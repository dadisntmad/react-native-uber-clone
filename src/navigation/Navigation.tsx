import React from 'react'
import { AuthScreen } from '../screens/AuthScreen/AuthScreen'
import { HomeScreen } from '../screens/HomeScreen/HomeScreen'
import { MapScreen } from '../screens/MapScreen/MapScreen'
import { FoodScreen } from '../screens/FoodScreen/FoodScreen'
import { CartScreen } from '../screens/CartScreen/CartScreen'
import { ReviewsScreen } from '../screens/ReviewsScreen/ReviewsScreen'
import { RestaurantDetailed } from '../screens/RestaurantDetailed/RestaurantDetailed'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { RootStackParamList } from '../types/navigation'

const Stack = createNativeStackNavigator<RootStackParamList>()

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
      <Stack.Screen name="Restaurant" component={RestaurantDetailed} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Reviews" component={ReviewsScreen} />
      </Stack.Group>
    </Stack.Navigator>
  )
}
