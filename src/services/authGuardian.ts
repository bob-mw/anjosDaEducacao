import { getRepository } from 'typeorm'
import { sign } from 'jsonwebtoken'
import { compare } from 'bcryptjs'

import Guardian from '@entities/guardian'
import authConfig from '@config/auth'

import AppError from '@errors/appError'

interface IGuardianData {
  email: string;
  password: string;
}

class AuthGuardianService {
  public async execute ({ email, password }: IGuardianData) {
    const guardianRepository = getRepository(Guardian)

    const guardian = await guardianRepository.findOne({
      where: {
        email
      }
    })

    if (!guardian) {
      throw new AppError('Email e/ou senha incorretos', 401)
    }

    const passwordMatch = await compare(password, guardian.password)

    if (!passwordMatch) {
      throw new AppError('Email e/ou senha incorretos', 401)
    }

    const { secret, expiresIn } = authConfig

    const token = sign({}, secret, {
      subject: guardian.id,
      expiresIn
    })

    return token
  }
}

export default AuthGuardianService
