import * as yup from 'yup'

const schema = yup.object().shape({
  name: yup.string().required(),
  password: yup.string().required(),
  newPassword: yup.string().required(),
  email: yup.string().email().required(),
  phone: yup.string().required()
})

export default schema
