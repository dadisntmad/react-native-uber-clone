import * as yup from 'yup'

export const signUpSchemeValidation = yup
  .object({
    fullName: yup
      .string()
      .min(3, 'Full name should be at least 3 characters')
      .required('Please fill in this field.'),
    email: yup.string().email('Please enter valid email.').required('Please fill in this field.'),
    password: yup
      .string()
      .min(7, 'Password should be at least 7 characters.')
      .required('Please fill in this field.'),
  })
  .required()

export const signInSchemeValidation = yup
  .object({
    loginEmail: yup
      .string()
      .email('Please enter valid email.')
      .required('Please fill in this field.'),
    loginPassword: yup
      .string()
      .min(7, 'Password should be at least 7 characters.')
      .required('Please fill in this field.'),
  })
  .required()
