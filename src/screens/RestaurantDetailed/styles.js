import { StyleSheet, Dimensions } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  image: {
    width: Dimensions.get('window').width,
    height: 250,
    resizeMode: 'cover',
    marginBottom: 24,
  },
  info: {
    padding: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'gray',
    marginBottom: 24,
  },
  title: {
    fontSize: 18,
    fontWeight: '500',
  },
  reviews: {
    color: 'gray',
  },
  rating: {
    width: 40,
    height: 40,
    backgroundColor: '#ebebeb',
    borderRadius: 20,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuContainer: {
    padding: 14,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'gray',
  },
  foodInfoContainer: {
    width: 225,
  },
  foodTitle: {
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 5,
  },
  foodDescription: {
    marginBottom: 5,
  },
  foodImage: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  button: {
    alignSelf: 'center',
    backgroundColor: 'black',
    padding: 14,
    width: 300,
    marginBottom: 32,
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
    alignSelf: 'center',
  },
})

export default styles
