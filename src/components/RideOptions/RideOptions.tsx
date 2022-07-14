import React, { useState } from 'react'
import { View, Text, TouchableOpacity, FlatList, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { selectTravelTimeInformation } from '../../selectors/selectors'
import { useSelector } from 'react-redux'
import 'intl'
import 'intl/locale-data/jsonp/en'

import { Entypo } from '@expo/vector-icons'
import car from '../../../assets/car.png'
import carXL from '../../../assets/carxl.png'
import carLUX from '../../../assets/lux.png'

import styles from './styles'

const data = [
  {
    id: 'Uber-X-123',
    title: 'UberX',
    multiplier: 1,
    image: car,
  },
  {
    id: 'Uber-XL-456',
    title: 'Uber XL',
    multiplier: 1.2,
    image: carXL,
  },
  {
    id: 'Uber-UXX-789',
    title: 'Uber LUX',
    multiplier: 1.75,
    image: carLUX,
  },
]

const SURGE_CHARGE_RATE = 1.5

export const RideOptions: React.FC = () => {
  const navigation = useNavigation()
  const [selected, setSelected] = useState({ id: '', title: '' })
  const travelTimeInformation = useSelector(selectTravelTimeInformation)

  const getBack = () => {
    navigation.goBack()
  }

  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity style={styles.backButton} onPress={getBack}>
          <Entypo name="chevron-small-left" size={32} color="black" />
        </TouchableOpacity>
        <Text style={styles.title}>Select a ride - {travelTimeInformation?.distance?.text}</Text>
      </View>
      <FlatList
        style={{ maxHeight: 230 }}
        data={data}
        keyExtractor={({ id }) => id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[styles.button, selected?.id === item.id && { backgroundColor: '#e7e7e7' }]}
            onPress={() => setSelected(item)}>
            <Image style={styles.image} source={item.image} />
            <View>
              <Text style={styles.carTitle}>{item.title}</Text>
              <Text>Travel time: ~{travelTimeInformation?.duration?.text} </Text>
            </View>
            <Text style={styles.price}>
              {new Intl.NumberFormat('us-us', {
                style: 'currency',
                currency: 'USD',
              }).format(
                (travelTimeInformation?.duration?.value * SURGE_CHARGE_RATE * item.multiplier) /
                  100,
              )}
            </Text>
          </TouchableOpacity>
        )}
      />
      <TouchableOpacity
        style={[styles.carButton, !selected && { backgroundColor: 'gray' }]}
        disabled={!selected}>
        <Text style={styles.carText}>Confirm {selected?.title}</Text>
      </TouchableOpacity>
    </View>
  )
}
