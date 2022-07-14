import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import { NavFavorites } from '../NavFavorites/NavFavorites'
import { greetUser } from '../utils/greetUser'
import { db, auth } from '../../../firebase'
import { GOOGLE_API_KEY } from '@env'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { useDispatch } from 'react-redux'
import { setDestination } from '../../redux/slices/navSlice'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../types/navigation'

import styles from './styles'
import { Origin } from '../../types/nav'

export const NavigateCard: React.FC = () => {
  const dispatch = useDispatch()
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()
  const [user, setUser] = useState([])

  const currentUser = auth.currentUser?.uid

  const fetchUser = () => {
    db.collection('users')
      .doc(currentUser)
      .onSnapshot((snapshot) => {
        if (snapshot.exists) {
          setUser({
            uid: currentUser,
            ...snapshot.data(),
          })
        }
      })
  }

  useEffect(() => {
    fetchUser()
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.greet}>{greetUser(user.fullName)}</Text>
      <View style={styles.destination}>
        <GooglePlacesAutocomplete
          styles={{
            container: {
              backgroundColor: 'white',
              paddingTop: 20,
              flex: 0,
            },
            textInput: {
              backgroundColor: '#DDDDDF',
              fontSize: 18,
            },
            textInputContainer: {
              paddingHorizontal: 14,
              paddingBottom: 0,
            },
          }}
          placeholder="Where to?"
          onPress={(data: Origin, details: Origin) => {
            dispatch(
              setDestination({
                location: details.geometry.location,
                description: data.description,
              }),
            )
            navigation.navigate('Ride')
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
      </View>
      <NavFavorites />
    </View>
  )
}
