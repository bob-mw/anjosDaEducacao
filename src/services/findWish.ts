import Wish from '@schemas/wish'
import { getRepository } from 'typeorm'

import User from '@entities/user'

import AppError from '@errors/appError'

interface IWishData {
  id: string;
}

class FindWishService {
  async execute ({ id }: IWishData) {
    const userRepository = getRepository(User)

    const user = await userRepository.findOne({
      where: {
        id
      }
    })

    if (!user) {
      throw new AppError('Usuário não encontrado', 401)
    }

    const wish = await Wish.find({
      name: id
    })

    if (!wish) {
      throw new AppError('Você ainda não tem pedidos', 401)
    }

    return wish
  }
}

export default FindWishService
