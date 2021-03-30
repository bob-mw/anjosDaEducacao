import { getRepository } from 'typeorm'
import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'

import Store from '@entities/store'

import authConfig from '@config/auth'

import AppError from '@errors/appError'

interface IStoreData {
  email: string;
  password: string;
}

class AuthStoreService {
  async execute ({ email, password }: IStoreData) {
    const storeRepository = getRepository(Store)

    const user = await storeRepository.findOne({
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

export default AuthStoreService
