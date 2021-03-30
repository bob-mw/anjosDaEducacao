import { Request, Response } from 'express'

import CreateStoreService from '@services/createStore'
import AuthStoreService from '@services/authStore'
import FindStoreService from '@services/findStore'

import createStoreSchema from '@validation/createStore'
import authSchema from '@validation/auth'

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

    delete user.password

    return response.json({
      user
    })
  }

  async session (request: Request, response: Response) {
    const validation = await authSchema.isValid(request.body)

    if (!validation) {
      throw new AppError('Erro na validação, verifique seus dados')
    }

    const { email, password } = request.body

    const authStore = new AuthStoreService()

    const token = await authStore.execute({
      email, password
    })

    return response.json({
      token
    })
  }

  async show (request: Request, response: Response) {
    const findStore = new FindStoreService()

    const user = await findStore.execute(request.user.id)

    delete user.password

    return response.json({
      user
    })
  }
}

export default new StoreController()
