import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  title: {
    paddingVertical: 15,
    textAlign: 'center',
    fontSize: 18,
  },
  backButton: {
    position: 'absolute',
    top: 10,
    left: 14,
    zIndex: 3,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 6,
  },
  price: {
    fontSize: 18,
  },
  carTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  carButton: {
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 14,
    margin: 12,
  },
  carText: {
    color: 'white',
    fontSize: 18,
  },
})

export default styles
