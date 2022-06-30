import React from 'react'
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'

import car from '../../../assets/car.png'
import food from '../../../assets/food.png'

import { Ionicons } from '@expo/vector-icons'

import styles from './styles'

const data = [
  {
    id: '1',
    img: car,
    title: 'Get a ride',
    screen: 'Ride',
  },
  {
    id: '2',
    img: food,
    title: 'Order food',
    screen: 'Food',
  },
]

export const NavOptions = () => {
  return (
    <FlatList
      data={data}
      keyExtractor={({ id }) => id}
      renderItem={({ item }) => (
        <TouchableOpacity>
          <View style={styles.container}>
            <Image style={styles.image} source={item.img} />
            <Text style={styles.title}>{item.title}</Text>
            <Ionicons name="md-arrow-forward-circle" size={46} color="black" />
          </View>
        </TouchableOpacity>
      )}
      horizontal
    />
  )
}
