import { Request, Response } from 'express'

import CreateStoreService from '@services/createStore'
import AuthStoreService from '@services/authStore'
import FindStoreService from '@services/findStore'
import UpdateStoreService from '@services/updateStore'

import createStoreSchema from '@validation/createStore'
import authSchema from '@validation/auth'
import updateStoreSchema from '@validation/updateStore'

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

  async update (request: Request, response: Response) {
    const validation = await updateStoreSchema.isValid(request.body)

    if (!validation) {
      throw new AppError('Erro na validação, verifique seus dados')
    }

    const { name, email, password, newPassword, cnpj, phone } = request.body

    const updateStore = new UpdateStoreService()

    const user = await updateStore.execute({
      id: request.user.id,
      name,
      email,
      password,
      newPassword,
      cnpj,
      phone
    })

    delete user.password

    return response.json({
      user
    })
  }
}

export default new StoreController()
