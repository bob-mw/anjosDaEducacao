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
      const name = wish.name.split('')[0]

      return name
    })

    console.log(wishes)

    return wishes
  }
}

export default ShowDonationService
