import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 14,
    backgroundColor: 'white',
  },
  button: {
    marginBottom: 24,
  },
  user: {
    flexDirection: 'row',
  },
  image: {
    width: 50,
    height: 50,
    resizeMode: 'cover',
    borderRadius: 25,
    marginBottom: 14,
    marginRight: 14,
  },
  date: {
    marginTop: 10,
    color: 'gray',
  },
  text: {
    marginBottom: 24,
  },
})

export default styles
