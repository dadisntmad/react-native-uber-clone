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
  completed: {
    fontSize: 18,
    fontWeight: '500',
    textAlign: 'center',
    marginBottom: 24,
  },
})

export default styles
