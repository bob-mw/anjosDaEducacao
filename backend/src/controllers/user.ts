import { Request, Response } from 'express'

import CreateUserService from '@services/createUser'
import AuthUserService from '@services/authUser'
import UpdateUserService from '@services/updateUser'
import FindUserService from '@services/findUser'

import createUserSchema from '@validation/createUser'
import updateUserSchema from '@validation/updateUser'
import authSchema from '@validation/auth'

import AppError from '@errors/appError'

class UserController {
  async create (request: Request, response: Response) {
    const validation = await createUserSchema.isValid(request.body)

    if (!validation) {
      throw new AppError('Erro na validação, verifique seus dados')
    }

    const {
      name,
      email,
      password,
      phone
    } = request.body

    const createUserService = new CreateUserService()

    const user = await createUserService.execute({
      name,
      email,
      password,
      phone
    })

    delete user.password

    return response.status(201).json({
      user
    })
  }

  async session (request: Request, response: Response) {
    const validation = await authSchema.isValid(request.body)

    if (!validation) {
      throw new AppError('Erro na validação, verifique seus dados')
    }

    const { email, password } = request.body

    const authUserService = new AuthUserService()

    const token = await authUserService.execute({
      email,
      password
    })

    return response.json({
      token
    })
  }

  async update (request: Request, response: Response) {
    const validation = await updateUserSchema.isValid(request.body)

    if (!validation) {
      throw new AppError('Use um formato valido para atualizar seus dados')
    }

    const { name, email, newPassword, phone, password } = request.body

    const updateUserService = new UpdateUserService()

    const user = await updateUserService.execute({
      id: request.user.id,
      name,
      email,
      newPassword,
      phone,
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
