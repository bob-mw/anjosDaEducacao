import * as yup from 'yup';

const schema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().min(6).required(),
    cpf: yup.string().required().length(11),
    phone: yup.string().required()
  })

export default schema;
