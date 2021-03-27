import { getRepository } from 'typeorm'

import User from '@entities/user'

class FindUserService {
  public async execute (id: string) {
    const userRepository = getRepository(User)

    const user = await userRepository.findOne({
      where: {
        id
      }
    })

    if (!user) {
      throw new Error('User not found')
    }

    return user
  }
}

export default FindUserService
