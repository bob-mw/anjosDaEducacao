import * as yup from 'yup'

const schema = yup.object().shape({
  newName: yup.string(),
  password: yup.string().required(),
  newPassword: yup.string(),
  newEmail: yup.string().email(),
  student: yup.boolean(),
  newPhone: yup.string()
})

export default schema
