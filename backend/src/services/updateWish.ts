import Wish from '@schemas/wish'
import { getRepository } from 'typeorm'

import User from '@entities/user'

import AppError from '@errors/appError'

interface IMaterialData {
  name: string;
  price: number;
  amount: number;
}

interface IWishData {
  id: string;
  owner: string;
  name: string;
  schoolName: string;
  city: string;
  state: string;
  teaching: string;
  materials: [IMaterialData]
}

class UpdateWishService {
  public async execute
  ({ id, owner, name, schoolName, city, state, teaching, materials }: IWishData) {
    const userRepository = getRepository(User)

    const user = await userRepository.findOne({
      where: {
        id: owner
      }
    })

    if (!user) {
      throw new AppError('Usuário não encontrado')
    }

    const wish = await Wish.findByIdAndUpdate(id, {
      name,
      schoolName,
      city,
      state,
      teaching,
      materials
    },
    {
      new: true
    })

    if (!wish) {
      throw new AppError('Pedido não encontrado')
    }

    return wish
  }
}

export default UpdateWishService
