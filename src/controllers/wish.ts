import { Request, Response } from 'express'

import createWishSchema from '@validation/createWish'
import materialListSchema from '@validation/MaterialList'

import CreateWishService from '@services/createWish'
import FindWishService from '@services/findWish'

import AppError from '@errors/appError'

class WishController {
  async create (request: Request, response: Response) {
    const validation = await createWishSchema.isValid(request.body)

    if (!validation) {
      throw new AppError('Erro na validação, verifique seus dados')
    }

    const materialsValidation = await materialListSchema.isValid(request.body)

    if (!materialsValidation) {
      throw new AppError('Erro na validação, utilize o formato correto dessa lista')
    }

    const { name, city, state, schoolName, materials, teaching } = request.body

    const createWish = new CreateWishService()

    const wish = await createWish.execute({
      owner: request.user.id,
      name,
      city,
      state,
      schoolName,
      materials,
      teaching
    })

    return response.json({
      wish
    })
  }

  async show (request: Request, response: Response) {
    const findWishService = new FindWishService()

    const wish = await findWishService.execute({
      id: request.user.id
    })

    return response.json({
      wish
    })
  }
}

export default new WishController()
