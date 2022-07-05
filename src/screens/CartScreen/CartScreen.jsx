import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import emptyCart from '../../../assets/empty.png'
import { AntDesign } from '@expo/vector-icons'

import styles from './styles'

export const CartScreen = () => {
  const navigation = useNavigation()

  const navigateBack = () => {
    navigation.goBack()
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={navigateBack}>
        <AntDesign name="arrowleft" size={32} color="black" />
      </TouchableOpacity>
      <View style={styles.imageContainer}>
        <Text style={styles.title}>Your cart is empty 😔</Text>
        <Image style={styles.image} source={emptyCart} />
      </View>
    </View>
  )
}
