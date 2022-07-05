import React from 'react'
import { View, Image, Text, FlatList, TouchableOpacity } from 'react-native'

import bread from '../../../assets/bread.png'
import coffee from '../../../assets/coffee.png'
import deals from '../../../assets/deals.png'
import desserts from '../../../assets/desserts.png'
import fastFood from '../../../assets/fast-food.png'
import softDrink from '../../../assets/soft-drink.png'

import styles from './styles'

const data = [
  {
    id: '1',
    image: bread,
    title: 'Bakery',
  },
  {
    id: '2',
    image: coffee,
    title: 'Coffee & Tea',
  },
  {
    id: '3',
    image: deals,
    title: 'Deals',
  },
  {
    id: '4',
    image: desserts,
    title: 'Desserts',
  },
  {
    id: '5',
    image: fastFood,
    title: 'Fast Food',
  },
  {
    id: '6',
    image: softDrink,
    title: 'Soft Drinks',
  },
]

export const FoodTypes = () => {
  return (
    <FlatList
      data={data}
      keyExtractor={({ id }) => id}
      renderItem={({ item }) => (
        <TouchableOpacity>
          <View style={styles.container}>
            <Image style={styles.image} source={item.image} />
            <Text style={styles.title}>{item.title}</Text>
          </View>
        </TouchableOpacity>
      )}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  )
}
