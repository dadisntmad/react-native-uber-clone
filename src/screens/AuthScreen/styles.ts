import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 14,
    backgroundColor: 'white',
  },
  questionOne: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 5,
  },
  questionTwo: {
    fontSize: 15,
    marginBottom: 14,
  },
  form: {
    marginTop: 14,
  },
  input: {
    backgroundColor: '#ebebeb',
    marginBottom: 14,
    padding: 14,
  },
  button: {
    backgroundColor: 'black',
    padding: 14,
    marginBottom: 14,
  },
  buttonText: {
    color: 'white',
    alignSelf: 'center',
  },
  navigationButton: {
    alignSelf: 'center',
  },
  errorMessage: {
    color: 'red',
    paddingVertical: 7,
  },
})

export default styles
