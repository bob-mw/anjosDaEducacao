import { getRepository } from 'typeorm'

import Guardian from '@entities/guardian'

import AppError from '@errors/appError'

class FindUserService {
  public async execute (id: string) {
    const guardianRespository = getRepository(Guardian)

    const guardian = await guardianRespository.findOne({
      where: {
        id
      }
    })

    if (!guardian) {
      throw new AppError('Usuário não encontrado')
    }

    return guardian
  }
}

export default FindUserService
