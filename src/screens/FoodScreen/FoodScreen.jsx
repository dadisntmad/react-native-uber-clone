import React, { useEffect } from 'react'
import { View, Text, Image, TouchableOpacity, Pressable, FlatList } from 'react-native'
import { FoodTypes } from '../../components/FoodTypes/FoodTypes'
import { useDispatch, useSelector } from 'react-redux'
import { fetchRestaurants } from '../../redux/actions/food'
import { selectOrigin, selectRestaurants } from '../../selectors/selectors'
import { useNavigation } from '@react-navigation/native'

import cart from '../../../assets/shopping-bag.png'
import { AntDesign } from '@expo/vector-icons'

import styles from './styles'

export const FoodScreen = () => {
  const dispatch = useDispatch()
  const navigation = useNavigation()
  const restaurants = useSelector(selectRestaurants)
  const location = useSelector(selectOrigin)

  useEffect(() => {
    dispatch(fetchRestaurants(location?.description))
  }, [])

  const navigateToCart = () => {
    navigation.navigate('Cart')
  }

  const navigateBack = () => {
    navigation.goBack()
  }

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={navigateBack}>
          <AntDesign name="arrowleft" size={32} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={navigateToCart}>
          <Image style={styles.cart} source={cart} />
        </TouchableOpacity>
      </View>
      <FoodTypes />
      <FlatList
        data={restaurants}
        keyExtractor={({ id }) => id}
        renderItem={({ item }) => (
          <Pressable onPress={() => navigation.navigate('Restaurant', { item })}>
            <View>
              <Image style={styles.background} source={{ uri: item.image_url }} />
              <View style={styles.info}>
                <View>
                  <Text style={styles.restaurantName}>{item.name}</Text>
                  <Text style={styles.deliveryTime}>30-45 · min</Text>
                </View>
                <View style={styles.rating}>
                  <Text>{item.rating}</Text>
                </View>
              </View>
            </View>
          </Pressable>
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}
