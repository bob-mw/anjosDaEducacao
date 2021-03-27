import { Request, Response } from 'express'
import CreateUserService from '@services/createUser'
import UpdateUserService from '@services/updateUser'
import FindUserService from '@services/findUserService'

import createUserSchema from '@validation/createUser'
import updateUserSchema from '@validation/updateUser'

import AppError from '@errors/appError'

class UserController {
  async create (request: Request, response: Response) {
    const validation = await createUserSchema.isValid(request.body)

    if (!validation) {
      throw new AppError('Erro na validação, verifique seus dados', 401)
    }

    const {
      name,
      email,
      password,
      cpf,
      phone
    } = request.body

    const createUserService = new CreateUserService()

    const user = await createUserService.execute({
      name,
      email,
      password,
      cpf,
      phone
    })

    delete user.password

    return response.status(201).json({
      user
    })
  }

  async update (request: Request, response: Response) {
    const validation = await updateUserSchema.isValid(request.body)

    if (!validation) {
      throw new AppError('Use um formato valido para atualizar seus dados')
    }

    const { newName, newEmail, newPassword, newPhone, password } = request.body

    const updateUserService = new UpdateUserService()

    const user = await updateUserService.execute({
      id: request.user.id,
      newName,
      newEmail,
      newPassword,
      newPhone,
      password
    })

    delete user.password

    return response.json({
      user
    })
  }

  async show (request: Request, response: Response) {
    const { id } = request.user

    const findUserService = new FindUserService()

    const user = await findUserService.execute(id)

    delete user.password

    return response.json({
      user
    })
  }
}

export default new UserController()
