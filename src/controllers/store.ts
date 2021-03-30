import { Request, Response } from 'express'

import CreateStoreService from '@services/createStore'

import createStoreSchema from '@validation/createStore'

import AppError from '@errors/appError'

class StoreController {
  async create (request: Request, response: Response) {
    const validation = await createStoreSchema.isValid(request.body)

    if (!validation) {
      throw new AppError('Erro na validação, verifique seus dados')
    }

    const { name, email, password, cnpj, phone } = request.body

    const createStore = new CreateStoreService()

    const user = await createStore.execute({
      name,
      email,
      password,
      cnpj,
      phone
    })

    return response.json({
      user
    })
  }
}

export default new StoreController()
