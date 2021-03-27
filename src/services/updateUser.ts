import { getRepository } from 'typeorm'
import { compare, hash } from 'bcryptjs'

import User from '@entities/user'

import AppError from '@errors/appError'

interface IUserData {
  id: string;
  newName?: string;
  newEmail?: string;
  password: string;
  newPassword: string;
  newPhone: string;
}

class UpdateUserService {
  public async execute
  ({ id, newName, newEmail, password, newPassword, newPhone }: IUserData) {
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

    if (newPassword) {
      user.password = await hash(newPassword, 10)
    }

    if (newEmail) {
      user.email = newEmail
    }

    if (newName) {
      user.name = newName
    }

    if (newPhone) {
      user.phone = newPhone
    }

    await userRepository.save(user)

    return user
  }
}

export default UpdateUserService
