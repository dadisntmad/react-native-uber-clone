import { StyleSheet, Dimensions } from 'react-native'

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  map: {
    height: Dimensions.get('window').height / 2,
  },
  info: {
    height: Dimensions.get('window').height / 2,
  },
  button: {
    zIndex: 5,
    position: 'absolute',
    top: 50,
    left: 24,
    backgroundColor: '#e7e7e7',
    padding: 10,
    borderRadius: 50,
  },
})

export default styles
