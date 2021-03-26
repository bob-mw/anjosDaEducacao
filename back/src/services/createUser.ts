import { getRepository } from 'typeorm'
import { hash } from 'bcryptjs'

import User from '@entities/user'
import Requisition from '@entities/request'

interface IUserData {
  name: string;
  email: string;
  password: string;
  cpf: string;
  phone: string;
}

class CreateUserService {
  public async execute
  ({ name, email, password, cpf, phone }: IUserData) {
    const userRepository = getRepository(User)

    const exists = await userRepository.findOne({
      where: {
        email
      }
    })

    if (exists) {
      throw new Error('O usuario já existe')
    }

    password = await hash(password, 10)

    const user = userRepository.create({
      name,
      email,
      password,
      cpf,
      phone
    })

    await userRepository.save(user)

    return user
  }
}

export default CreateUserService
