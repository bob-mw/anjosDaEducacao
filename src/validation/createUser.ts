import * as yup from 'yup'

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().min(6).required(),
  confirmPassword: yup.string().test('passwords-match', function (value) {
    const { password } = this.parent
    return password === value
  }),
  cpf: yup.string().length(11).required(),
  phone: yup.string().required()
})

export default schema
