import React, { useEffect } from 'react'
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { fetchReviews } from '../../redux/actions/food'
import { selectReviews } from '../../selectors/selectors'
import { RootStackParamList } from '../../types/navigation'
import { AppDispatch } from '../../redux/store'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import moment from 'moment'

import { AntDesign } from '@expo/vector-icons'

import styles from './styles'

type ReviewsScreenRouteProp = RouteProp<RootStackParamList, 'Reviews'>

export const ReviewsScreen: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>()
  const route = useRoute<ReviewsScreenRouteProp>()
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()
  const reviews = useSelector(selectReviews)

  const restaurantId = route.params?.id

  useEffect(() => {
    dispatch(fetchReviews(restaurantId))
  }, [])

  const onNavigateBack = () => {
    navigation.goBack()
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onNavigateBack}>
        <AntDesign name="arrowleft" size={32} color="black" />
      </TouchableOpacity>
      <FlatList
        data={reviews}
        keyExtractor={({ id }) => id}
        renderItem={({ item }) => (
          <View>
            <View style={styles.user}>
              <Image style={styles.image} source={{ uri: item.user?.image_url }} />
              <View>
                <Text>{item.user.name}</Text>
                <Text style={styles.date}>{moment(item.time_created).format('MMMM Do YYYY')}</Text>
              </View>
            </View>
            <Text style={styles.text}>{item.text}</Text>
          </View>
        )}
      />
    </View>
  )
}
