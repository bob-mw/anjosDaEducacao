import { getRepository } from 'typeorm'

import Store from '@entities/store'

import AppError from '@errors/appError'

class FindStoreService {
  async execute (id: string) {
    const storeRepository = getRepository(Store)

    const user = await storeRepository.findOne({
      where: {
        id
      }
    })

    if (!user) {
      throw new AppError('Usuário não encontrado')
    }

    return user
  }
}

export default FindStoreService
