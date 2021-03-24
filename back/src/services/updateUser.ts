import { getRepository } from 'typeorm'
import { compare, hash } from 'bcryptjs'

import User from '@entities/user'

interface IUserData {
  id: string;
  newName?: string;
  newEmail?: string;
  password: string;
  newPassword: string;
  newPhone: string;
  student?: boolean;
}

class UpdateUserService {
  public async execute
  ({ id, newName, newEmail, password, newPassword, newPhone, student }: IUserData) {
    const userRepository = getRepository(User)

    const user = await userRepository.findOne({
      where: {
        id
      }
    })

    if (!user) {
      throw new Error('Usuário não encontrado')
    }

    const passwordMatch = await compare(password, user.password)

    if (!passwordMatch) {
      throw new Error('Senha incorreta')
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

    if (student) {
      user.student = student
    }

    if (newPhone) {
      user.phone = newPhone
    }

    await userRepository.save(user)

    return user
  }
}

export default UpdateUserService
