import { getRepository } from 'typeorm'
import { hash } from 'bcryptjs'

import Guardian from '@entities/guardian'

import AppError from '@errors/appError'

interface IGuardianData {
  id: string;
  name: string;
  email: string;
  password: string;
}

class UpdateGuardianService {
  public async execute ({ id, name, email, password }: IGuardianData) {
    const guardianRepository = getRepository(Guardian)

    const exists = await guardianRepository.findOne({
      where: {
        email
      }
    })

    if (exists) {
      throw new AppError('Email já está em uso')
    }

    const guardian = await guardianRepository.findOne({
      where: {
        id
      }
    })

    if (!guardian) {
      throw new AppError('Usuario não encontrado')
    }

    guardian.name = name
    guardian.email = email
    guardian.password = await hash(password, 10)

    await guardianRepository.save(guardian)

    return guardian
  }
}

export default UpdateGuardianService
