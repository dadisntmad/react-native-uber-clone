import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
    paddingHorizontal: 14,
  },
  icon: {
    marginRight: 10,
    padding: 12,
    backgroundColor: '#ebebeb',
    borderRadius: 5,
    overflow: 'hidden',
  },
  location: {
    fontSize: 15,
    fontWeight: '500',
    marginBottom: 5,
  },
  address: {
    color: 'grey',
  },
})

export default styles
