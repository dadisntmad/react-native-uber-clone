import { StyleSheet, Dimensions } from 'react-native'

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 14,
  },
  cart: {
    alignSelf: 'flex-end',
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  background: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width / 2,
    resizeMode: 'cover',
    marginBottom: 14,
  },
  info: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 14,
    marginBottom: 14,
  },
  restaurantName: {
    fontSize: 15,
    fontWeight: '600',
  },
  deliveryTime: {
    color: 'gray',
  },
  rating: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
    height: 40,
    backgroundColor: '#ebebeb',
    borderRadius: 20,
    overflow: 'hidden',
  },
})

export default styles
