import * as yup from 'yup'

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required(),
  student: yup.boolean(),
  cpf: yup.string().required().length(11),
  phone: yup.string().required()
})

export default schema
