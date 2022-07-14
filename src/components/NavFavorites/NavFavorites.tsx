import React from 'react'
import { View, Text, FlatList, TouchableOpacity } from 'react-native'

import { Feather } from '@expo/vector-icons'

import styles from './styles'

const data = [
  {
    id: '1',
    icon: 'home',
    location: 'Home',
    address: 'Chill Street, Kyiv, UA',
  },
  {
    id: '2',
    icon: 'briefcase',
    location: 'Work',
    address: 'Code Street, Kyiv, UA',
  },
]

export const NavFavorites: React.FC = () => {
  return (
    <FlatList
      data={data}
      keyExtractor={({ id }) => id}
      renderItem={({ item }) => (
        <TouchableOpacity>
          <View style={styles.container}>
            <Feather style={styles.icon} name={item.icon} size={24} color="black" />
            <View>
              <Text style={styles.location}>{item.location}</Text>
              <Text style={styles.address}>{item.address}</Text>
            </View>
          </View>
        </TouchableOpacity>
      )}
    />
  )
}
