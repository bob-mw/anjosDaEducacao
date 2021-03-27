import { getRepository } from 'typeorm'
import { hash } from 'bcryptjs'

import User from '@entities/user'

import AppError from '@errors/appError'

interface IUserData {
  name: string;
  email: string;
  password: string;
  cpf: string;
  phone: string;
  state: string;
  city: string;
  cep: string;
  street: string;
  number: number;
}

class CreateUserService {
  public async execute
  (userData: IUserData) {
    const userRepository = getRepository(User)

    const exists = await userRepository.findOne({
      where: {
        email: userData.email
      }
    })

    if (exists) {
      throw new AppError('O usuario já existe')
    }

    userData.password = await hash(userData.password, 10)

    const user = userRepository.create(userData)

    await userRepository.save(user)

    return user
  }
}

export default CreateUserService
