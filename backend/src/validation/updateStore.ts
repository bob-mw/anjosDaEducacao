import * as yup from 'yup'

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required(),
  newPassword: yup.string().required(),
  cnpj: yup.string().required(),
  phone: yup.string().required()
})

export default schema
