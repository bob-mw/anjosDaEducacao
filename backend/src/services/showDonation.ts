import Wish from '@schemas/wish'

import AppError from '@errors/appError'

class ShowDonationService {
  public async execute () {
    const wishes = await Wish.find({
      finished: false
    })

    if (!wishes) {
      throw new AppError('Não existem pedidos por aqui... Será que todas as crianças já tem material para estudar?', 200)
    }

    wishes.map((wish) => {
      wish.name = wish.name.split(' ')[0]

      wish.finished = undefined
      wish.city = undefined
      wish.state = undefined
      wish.schoolName = undefined
      wish.createdAt = undefined
      wish.updatedAt = undefined
      wish.__v = undefined

      return true
    })

    return wishes
  }
}

export default ShowDonationService
