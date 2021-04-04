import { getRepository } from 'typeorm'
import { compare, hash } from 'bcryptjs'

import User from '@entities/user'

import AppError from '@errors/appError'

interface IUserData {
  id: string;
  name: string;
  email: string;
  password: string;
  newPassword: string;
  phone: string;
}

class UpdateUserService {
  public async execute
  ({ id, name, email, password, newPassword, phone }: IUserData) {
    const userRepository = getRepository(User)

    const user = await userRepository.findOne({
      where: {
        id
      }
    })

    if (!user) {
      throw new AppError('Usuário não encontrado')
    }

    const passwordMatch = await compare(password, user.password)

    if (!passwordMatch) {
      throw new AppError('Senha incorreta')
    }

    if (user.email !== email) {
      const exists = await userRepository.findOne({
        where: {
          email
        }
      })

      if (exists) {
        throw new AppError('Email já está em uso')
      }

      user.email = email
    }

    if (user.email !== email) {
      const exists = await userRepository.findOne({
        where: {
          phone
        }
      })

      if (exists) {
        throw new AppError('Este número já está em uso')
      }
    }

    user.password = await hash(newPassword, 10)

    user.name = name
    user.phone = phone

    await userRepository.save(user)

    return user
  }
}

export default UpdateUserService
