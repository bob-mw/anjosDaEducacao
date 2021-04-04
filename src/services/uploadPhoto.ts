import Wish from '@schemas/wish'

import AppError from '@errors/appError'

interface IUploadData {
  owner: string;
  id: string;
  photo: string;
}

class UploadPhotoService {
  public async execute ({ owner, id, photo }: IUploadData) {
    const wish = await Wish.findById(id)

    if (!wish) {
      throw new AppError('Pedido não encontrado')
    }

    if (wish.owner !== owner) {
      throw new AppError('Você não pode alterar um pedido que não é seu', 401)
    }

    if (!wish.finished) {
      throw new AppError('O pedido precisa estar finalizado para poder adicionar uma imagem', 401)
    }

    const updatedWish = await Wish.findByIdAndUpdate(id, {
      photo
    },
    {
      new: true,
      useFindAndModify: true
    })

    return updatedWish
  }
}

export default UploadPhotoService
