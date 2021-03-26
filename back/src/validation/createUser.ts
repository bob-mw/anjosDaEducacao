import * as yup from 'yup'

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required(),
  confirmPassword: yup.string().test('passwords-match', function (value) {
    const { password } = this.parent
    return password === value
  }),
  cpf: yup.string().required().length(11),
  phone: yup.string().required(),
  state: yup.string().required(),
  city: yup.string().required(),
  cep: yup.string().required(),
  street: yup.string().required(),
  number: yup.number().required()
})

export default schema
