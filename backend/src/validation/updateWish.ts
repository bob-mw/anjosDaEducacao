import * as yup from 'yup'

const schema = yup.object().shape({
  id: yup.string().required(),
  name: yup.string().required(),
  city: yup.string().required(),
  state: yup.string().required(),
  schoolName: yup.string().required(),
  teaching: yup.string().required()
})

export default schema
