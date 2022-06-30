import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import { greetUser } from '../utils/greetUser'
import { db, auth } from '../../../firebase'

import styles from './styles'

export const NavigateCard = () => {
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
    </View>
  )
}
