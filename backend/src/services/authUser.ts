import { getRepository } from 'typeorm'
import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'

import User from '@entities/user'
import authConfig from '@config/auth'

import AppError from '@errors/appError'

interface IUserData {
  email: string;
  password: string;
}

class AuthUserService {
  public async execute ({ email, password }: IUserData) {
    const userRepository = getRepository(User)

    const user = await userRepository.findOne({
      where: {
        email
      }
    })

    if (!user) {
      throw new AppError('Email e/ou senha incorretos', 401)
    }

    const passwordMatch = await compare(password, user.password)

    if (!passwordMatch) {
      throw new AppError('Email e/ou senha incorretos', 401)
    }

    const { secret, expiresIn } = authConfig

    const token = sign({}, secret, {
      subject: user.id,
      expiresIn
    })

    return token
  }
}

export default AuthUserService
