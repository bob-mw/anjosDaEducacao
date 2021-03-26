import { Request, Response } from 'express'
import CreateUserService from '@services/createUser'
import UpdateUserService from '@services/updateUser'

import createUserSchema from '@validation/createUser'

class UserController {
  async create (request: Request, response: Response) {
    const validation = await createUserSchema.isValid(request.body)

    if (!validation) {
      throw new Error('Validation failed')
    }

    const { name, email, password, cpf, phone } = request.body

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

    return response.json({
      user
    })
  }
}

export default new UserController()
