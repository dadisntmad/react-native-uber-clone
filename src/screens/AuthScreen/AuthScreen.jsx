import React, { useState, useEffect } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { auth, db } from '../../../firebase'

import styles from './styles'

export const AuthScreen = () => {
  const navigation = useNavigation()
  const [formType, setFormType] = useState('signin')
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigateToSignUp = () => {
    setFormType('signup')
  }

  const navigateToSignIn = () => {
    setFormType('signin')
  }

  const signUp = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const data = {
          uid: userCredential.user?.uid,
          fullName,
          email,
        }
        db.collection('users').doc(userCredential.user?.uid).set(data)
      })
      .catch((e) => {
        console.log(e)
      })
  }

  const signIn = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        console.log(userCredential)
      })
      .catch((e) => {
        console.log(e)
      })
  }

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.replace('Home')
        setFullName('')
        setEmail('')
        setPassword('')
      } else {
        console.log('user is logged out')
      }
    })
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        {formType === 'signin' ? (
          <View>
            <Text style={styles.questionOne}>Log in to your account</Text>
            <TextInput
              style={styles.input}
              placeholder="Please enter email"
              keyboardType="email-address"
              clearButtonMode="while-editing"
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Please enter password"
              secureTextEntry
              clearButtonMode="while-editing"
              value={password}
              onChangeText={(text) => setPassword(text)}
            />
            <TouchableOpacity style={styles.button} onPress={signIn}>
              <Text style={styles.buttonText}>Sign In</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navigationButton} onPress={navigateToSignUp}>
              <Text>Don't have an account? Sign Up</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View>
            <Text style={styles.questionOne}>What's your name?</Text>
            <Text style={styles.questionTwo}>How should we properly address you?</Text>
            <TextInput
              style={styles.input}
              secureTextEntry={false}
              placeholder="Please enter full name"
              clearButtonMode="while-editing"
              value={fullName}
              onChangeText={(text) => setFullName(text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Please enter email"
              keyboardType="email-address"
              clearButtonMode="while-editing"
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Please enter password"
              secureTextEntry
              clearButtonMode="while-editing"
              value={password}
              onChangeText={(text) => setPassword(text)}
            />
            <TouchableOpacity style={styles.button} onPress={signUp}>
              <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navigationButton} onPress={navigateToSignIn}>
              <Text>Already have an account? Sign In</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  )
}
