import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 14,
    backgroundColor: 'white',
  },
  button: {
    padding: 14,
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: '500',
  },
  image: {
    width: 250,
    height: 250,
    resizeMode: 'contain',
  },
})

export default styles
