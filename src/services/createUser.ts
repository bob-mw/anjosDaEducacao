import { getRepository } from 'typeorm'
import { hash } from 'bcryptjs'

import User from '@entities/user'

import AppError from '@errors/appError'

interface IUserData {
  name: string;
  email: string;
  password: string;
  phone: string;
}

class CreateUserService {
  public async execute
  ({ name, email, password, phone }: IUserData) {
    const userRepository = getRepository(User)

    const emailExists = await userRepository.findOne({
      where: {
        email
      }
    })

    if (emailExists) {
      throw new AppError('O usuario já existe')
    }

    const phoneExists = await userRepository.findOne({
      where: {
        phone
      }
    })

    if (phoneExists) {
      throw new AppError('O usuario já existe')
    }

    password = await hash(password, 10)

    const user = userRepository.create({
      name,
      email,
      password,
      phone
    })

    await userRepository.save(user)

    return user
  }
}

export default CreateUserService
