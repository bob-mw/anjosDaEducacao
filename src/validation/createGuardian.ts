import * as yup from 'yup'

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required(),
  confirmPassword: yup.string().test('passwords-match', function (value) {
    const { password } = this.parent
    return password === value
  })
})

export default schema
