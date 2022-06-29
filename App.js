import { StyleSheet, SafeAreaView, Platform, StatusBar } from 'react-native'
import { Navigation } from './src/navigation/Navigation'
import { NavigationContainer } from '@react-navigation/native'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight,
  },
})
