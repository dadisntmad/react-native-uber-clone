import React from 'react'
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import { useRoute } from '@react-navigation/native'

import styles from './styles'

const data = [
  {
    id: '1',
    title: 'Lasagna',
    description: 'With butter lettuce, tomato and sauce bechamel',
    price: '$13.50',
    image: 'https://www.modernhoney.com/wp-content/uploads/2019/08/Classic-Lasagna-14-scaled.jpg',
  },
  {
    id: '2',
    title: 'Tandoori Chicken',
    description: 'Amazing Indian dish with tenderloin chicken off the sizzles 🔥',
    price: '$19.20',
    image: 'https://i.ytimg.com/vi/BKxGodX9NGg/maxresdefault.jpg',
  },
  {
    id: '3',
    title: 'Chilaquiles',
    description: 'Chilaquiles with cheese and sauce. A delicious mexican dish 🇲🇽',
    price: '$14.50',
    image:
      'https://i2.wp.com/chilipeppermadness.com/wp-content/uploads/2020/11/Chilaquales-Recipe-Chilaquiles-Rojos-1.jpg',
  },
  {
    id: '4',
    title: 'Chicken Caesar Salad',
    description:
      'One can never go wrong with a chicken caesar salad. Healthy option with greens and proteins!',
    price: '$21.50',
    image:
      'https://images.themodernproper.com/billowy-turkey/production/posts/2019/Easy-italian-salad-recipe-10.jpg?w=1200&h=1200&q=82&fm=jpg&fit=crop&fp-x=0.5&fp-y=0.5&dm=1614096227&s=c0f63a30cef3334d97f9ecad14be51da',
  },
  {
    id: '5',
    title: 'Lasagna',
    description: 'With butter lettuce, tomato and sauce bechamel',
    price: '$13.50',
    image: 'https://www.modernhoney.com/wp-content/uploads/2019/08/Classic-Lasagna-14-scaled.jpg',
  },
]

export const RestaurantDetailed = () => {
  const route = useRoute()

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: route.params?.item.image_url }} />
      <View style={styles.info}>
        <View>
          <Text style={styles.title}>{route.params?.item.name}</Text>
          <TouchableOpacity>
            <Text style={styles.reviews}>See {route.params?.item.review_count} reviews</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.rating}>
          <Text>{route.params?.item.rating}</Text>
        </View>
      </View>
      <ScrollView style={{ marginBottom: 24 }} showsVerticalScrollIndicator={false}>
        {data.map((food) => (
          <View key={food.id} style={styles.menuContainer}>
            <View style={styles.foodInfoContainer}>
              <Text style={styles.foodTitle}>{food.title}</Text>
              <Text style={styles.foodDescription}>{food.description}</Text>
              <Text>{food.price}</Text>
            </View>
            <Image style={styles.foodImage} source={{ uri: food.image }} />
          </View>
        ))}
      </ScrollView>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>View cart $20</Text>
      </TouchableOpacity>
    </View>
  )
}
