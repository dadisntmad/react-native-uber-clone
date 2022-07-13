import React, { useState, useEffect } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { auth, db } from '../../../firebase'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { signInSchemeValidation, signUpSchemeValidation } from '../../validation/validation'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../types/navigation'

import styles from './styles'

type SignUpFormData = {
  fullName: string
  email: string
  password: string
}

type SignInFormData = {
  loginEmail: string
  loginPassword: string
}

export const AuthScreen: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()
  const [formType, setFormType] = useState<'signin' | 'signup'>('signin')

  const {
    control: controlSignUp,
    handleSubmit: handleSubmitSignUp,
    formState: { errors: errorsSignUp },
  } = useForm<SignUpFormData>({
    resolver: yupResolver(signUpSchemeValidation),
    defaultValues: {
      fullName: '',
      email: '',
      password: '',
    },
  })

  const {
    control: controlSignIn,
    handleSubmit: handleSubmitSignIn,
    formState: { errors: errorsSignIn },
  } = useForm<SignInFormData>({
    resolver: yupResolver(signInSchemeValidation),
    defaultValues: {
      loginEmail: '',
      loginPassword: '',
    },
  })

  const navigateToSignUp = () => {
    setFormType('signup')
  }

  const navigateToSignIn = () => {
    setFormType('signin')
  }

  const signUp = (values: SignUpFormData) => {
    auth
      .createUserWithEmailAndPassword(values.email, values.password)
      .then((userCredential) => {
        const data = {
          uid: userCredential.user?.uid,
          fullName: values.fullName,
          email: values.email,
        }
        db.collection('users').doc(userCredential.user?.uid).set(data)
      })
      .catch((e) => {
        console.log(e)
      })
  }

  const signIn = (values: SignInFormData) => {
    auth
      .signInWithEmailAndPassword(values.loginEmail, values.loginPassword)
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
            <Controller
              control={controlSignIn}
              rules={{
                required: true,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={styles.input}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  placeholder="Please enter email"
                  keyboardType="email-address"
                  clearButtonMode="while-editing"
                />
              )}
              name="loginEmail"
            />
            {errorsSignIn.loginEmail && (
              <Text style={styles.errorMessage}>{errorsSignIn.loginEmail?.message}</Text>
            )}
            <Controller
              control={controlSignIn}
              rules={{
                required: true,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={styles.input}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  placeholder="Please enter password"
                  secureTextEntry
                  clearButtonMode="while-editing"
                />
              )}
              name="loginPassword"
            />
            {errorsSignIn.loginPassword && (
              <Text style={styles.errorMessage}>{errorsSignIn.loginPassword?.message}</Text>
            )}
            <TouchableOpacity style={styles.button} onPress={handleSubmitSignIn(signIn)}>
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
            <Controller
              control={controlSignUp}
              rules={{
                required: true,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={styles.input}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  secureTextEntry={false}
                  placeholder="Please enter full name"
                  clearButtonMode="while-editing"
                />
              )}
              name="fullName"
            />
            {errorsSignUp.fullName && (
              <Text style={styles.errorMessage}>{errorsSignUp.fullName?.message}</Text>
            )}
            <Controller
              control={controlSignUp}
              rules={{
                required: true,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={styles.input}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  placeholder="Please enter email"
                  keyboardType="email-address"
                  clearButtonMode="while-editing"
                />
              )}
              name="email"
            />
            {errorsSignUp.email && (
              <Text style={styles.errorMessage}>{errorsSignUp.email?.message}</Text>
            )}
            <Controller
              control={controlSignUp}
              rules={{
                required: true,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={styles.input}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  placeholder="Please enter password"
                  secureTextEntry
                  clearButtonMode="while-editing"
                />
              )}
              name="password"
            />
            {errorsSignUp.password && (
              <Text style={styles.errorMessage}>{errorsSignUp.password?.message}</Text>
            )}
            <TouchableOpacity style={styles.button} onPress={handleSubmitSignUp(signUp)}>
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
