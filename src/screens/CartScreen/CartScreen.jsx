import React, { useState, useEffect } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { auth, db } from '../../../firebase'

import emptyCart from '../../../assets/empty.png'
import { AntDesign } from '@expo/vector-icons'

import styles from './styles'

export const CartScreen = () => {
  const navigation = useNavigation()
  const [cartFood, setCartFood] = useState([])

  const currentUser = auth.currentUser?.uid

  const navigateBack = () => {
    navigation.goBack()
  }

  useEffect(() => {
    const fetchCart = async () => {
      const doc = await db.collection('orders').doc(currentUser).get()
      const data = doc.data()
      if (!data.food) {
        setCartFood([])
      } else {
        setCartFood(data.food)
      }
      return doc
    }

    fetchCart()
  }, [])

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={navigateBack}>
        <AntDesign name="arrowleft" size={32} color="black" />
      </TouchableOpacity>
      {cartFood.length > 0 ? (
        cartFood.map((food) => (
          <View key={food?.id} style={styles.menuContainer}>
            <View style={styles.foodInfoContainer}>
              <Text style={styles.foodTitle}>{food?.title}</Text>
              <Text style={styles.foodDescription}>{food?.description}</Text>
              <Text>{food?.price}</Text>
            </View>
            <Image style={styles.foodImage} source={{ uri: food?.image }} />
          </View>
        ))
      ) : (
        <View style={styles.imageContainer}>
          <Text style={styles.title}>Your cart is empty 😔</Text>
          <Image style={styles.image} source={emptyCart} />
        </View>
      )}
    </View>
  )
}
