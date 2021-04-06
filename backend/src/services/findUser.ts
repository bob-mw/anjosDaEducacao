import { getRepository } from 'typeorm'

import User from '@entities/user'

import AppError from '@errors/appError'

class FindUserService {
  public async execute (id: string) {
    const userRepository = getRepository(User)

    const user = await userRepository.findOne({
      where: {
        id
      }
    })

    if (!user) {
      throw new AppError('User not found')
    }

    return user
  }
}

export default FindUserService
