import React from 'react'
import { View, Image, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { auth } from '../../../firebase'

import logo from '../../../assets/logo.png'

import { Ionicons } from '@expo/vector-icons'

import styles from './styles'

export const HomeScreen = () => {
  const navigation = useNavigation()

  const signOut = () => {
    auth.signOut().then(() => {
      navigation.replace('Auth')
    })
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logo} style={styles.logo} />
        <TouchableOpacity onPress={signOut}>
          <Ionicons name="md-exit-outline" size={32} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  )
}
