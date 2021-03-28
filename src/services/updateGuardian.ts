import { getRepository } from 'typeorm'
import { compare, hash } from 'bcryptjs'

import Guardian from '@entities/guardian'

import AppError from '@errors/appError'

interface IGuardianData {
  id: string;
  name: string;
  email: string;
  password: string;
  newPassword?: string;
  phone: string;
}

class UpdateGuardianService {
  public async execute ({ id, name, email, password, newPassword, phone }: IGuardianData) {
    const guardianRepository = getRepository(Guardian)

    const guardian = await guardianRepository.findOne({
      where: {
        id
      }
    })

    if (!guardian) {
      throw new AppError('Usuario não encontrado')
    }

    const passwordMatch = await compare(password, guardian.password)

    if (!passwordMatch) {
      throw new AppError('Senha invalida', 401)
    }

    if (guardian.email !== email) {
      const exists = await guardianRepository.findOne({
        where: {
          email
        }
      })

      if (exists) {
        throw new AppError('Email já está em uso', 401)
      }
    }

    if (guardian.phone !== phone) {
      const exists = await guardianRepository.findOne({
        where: {
          phone
        }
      })

      if (exists) {
        throw new AppError('O número pertence a outro usuário', 401)
      }
    }

    if (newPassword) {
      guardian.password = await hash(newPassword, 10)
    }

    guardian.email = email
    guardian.name = name
    guardian.phone = phone

    await guardianRepository.save(guardian)

    return guardian
  }
}

export default UpdateGuardianService
