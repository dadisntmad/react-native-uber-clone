import React from 'react'
import { View, Image, TouchableOpacity } from 'react-native'
import { NavOptions } from '../../components/NavOptions/NavOptions'
import { NavFavorites } from '../../components/NavFavorites/NavFavorites'
import { useNavigation } from '@react-navigation/native'
import { auth } from '../../../firebase'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { GOOGLE_API_KEY } from '@env'
import { useDispatch } from 'react-redux'
import { setDestination, setOrigin } from '../../redux/slices/navSlice'

import logo from '../../../assets/logo.png'

import { Ionicons } from '@expo/vector-icons'

import styles from './styles'

export const HomeScreen = () => {
  const dispatch = useDispatch()
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
      <GooglePlacesAutocomplete
        styles={{
          container: {
            flex: 0,
          },
          textInput: {
            fontSize: 18,
          },
        }}
        placeholder="Where from?"
        onPress={(data, details = null) => {
          dispatch(
            setOrigin({
              location: details.geometry.location,
              description: data.description,
            }),
          )
          dispatch(setDestination(''))
        }}
        query={{
          key: GOOGLE_API_KEY,
          language: 'en',
        }}
        debounce={400}
        enablePoweredByContainer={false}
        fetchDetails={true}
        minLength={3}
        nearbyPlacesAPI="GooglePlacesSearch"
      />
      <NavOptions />
      <NavFavorites />
    </View>
  )
}
