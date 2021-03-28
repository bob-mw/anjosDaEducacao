import { getRepository } from 'typeorm'
import { hash } from 'bcryptjs'

import Guardian from '@entities/guardian'

import AppError from '@errors/appError'

interface IGuardianData {
  id: string;
  name: string;
  email: string;
  password: string;
  phone: string;
}

class UpdateGuardianService {
  public async execute ({ id, name, email, password, phone }: IGuardianData) {
    const guardianRepository = getRepository(Guardian)

    const guardian = await guardianRepository.findOne({
      where: {
        id
      }
    })

    if (!guardian) {
      throw new AppError('Usuario não encontrado')
    }

    if (guardian.email !== email) {
      const exists = await guardianRepository.findOne({
        where: {
          email
        }
      })

      if (exists) {
        throw new AppError('Email já está em uso')
      }

      guardian.email = email
    }

    if (guardian.password !== password) {
      guardian.password = await hash(password, 10)
    }

    guardian.name = name
    guardian.phone = phone

    await guardianRepository.save(guardian)

    return guardian
  }
}

export default UpdateGuardianService
