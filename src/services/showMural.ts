import Wish from '@schemas/wish'

import AppError from '@errors/appError'

class ShowDonationService {
  public async execute () {
    const wishes = await Wish.find({
      finished: true
    })

    if (wishes.length === 0) {
      throw new AppError('Nenhum pedido foi finalizado até agora... Você pode ajudar alguém?', 200)
    }

    wishes.map((wish) => {
      const name = wish.name.split('')[0]

      wish.finished = undefined
      wish.city = undefined
      wish.state = undefined
      wish.createdAt = undefined
      wish.__v = undefined

      return name
    })

    return wishes
  }
}

export default ShowDonationService
