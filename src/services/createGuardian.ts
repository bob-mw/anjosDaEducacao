import { getRepository } from 'typeorm'
import { hash } from 'bcryptjs'

import Guardian from '@entities/guardian'

import AppError from '@errors/appError'

interface IGuardianData {
  name: string;
  email: string;
  password: string;
  cpf: string;
  phone: string;
}

class CreateGuardianService {
  public async execute ({ name, email, password, cpf, phone }: IGuardianData) {
    const guardianRepository = getRepository(Guardian)

    const exists = await guardianRepository.findOne({
      where: {
        email
      }
    })

    if (exists) {
      throw new AppError('Usuário já existe')
    }

    password = await hash(password, 10)

    const user = guardianRepository.create({
      name,
      email,
      password,
      cpf,
      phone
    })

    await guardianRepository.save(user)

    return user
  }
}

export default CreateGuardianService
