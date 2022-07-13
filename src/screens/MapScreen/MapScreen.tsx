import React from 'react'
import { View, KeyboardAvoidingView, Platform, TouchableOpacity, Text } from 'react-native'
import { Map } from '../../components/Map/Map'
import { NavigateCard } from '../../components/NavigateCard/NavigateCard'
import { RideOptions } from '../../components/RideOptions/RideOptions'
import { useNavigation } from '@react-navigation/native'
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack'
import { RootStackParamList } from '../../types/navigation'

import { Feather } from '@expo/vector-icons'

import styles from './styles'

const Stack = createNativeStackNavigator<RootStackParamList>()

export const MapScreen: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()

  const navigateBack = () => {
    navigation.goBack()
  }

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        behavior="position"
        keyboardVerticalOffset={Platform.OS === 'ios' ? -64 : 0}>
        <View style={styles.map}>
          <TouchableOpacity style={styles.button} onPress={navigateBack}>
            <Feather name="menu" size={24} color="black" />
          </TouchableOpacity>
          <Map />
        </View>
        <View style={styles.info}>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}>
            <Stack.Screen name="Navigate" component={NavigateCard} />
            <Stack.Screen name="Ride" component={RideOptions} />
          </Stack.Navigator>
        </View>
      </KeyboardAvoidingView>
    </View>
  )
}
