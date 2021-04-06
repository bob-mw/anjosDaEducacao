import { Request, Response } from 'express'
import CreateGuardianService from '@services/createGuardian'
import AuthGuardianService from '@services/authGuardian'
import UpdateGuardianService from '@services/updateGuardian'
import FindGuardianService from '@services/findGuardian'

import createGuardianSchema from '@validation/createGuardian'
import updateGuardianSchema from '@validation/updateGuardian'
import authSchema from '@validation/auth'

import AppError from '@errors/appError'

class GuardianController {
  async create (request: Request, response: Response) {
    const validation = await createGuardianSchema.isValid(request.body)

    if (!validation) {
      throw new AppError('Erro na validação, verifique seus dados')
    }

    const { name, email, password } = request.body

    const createGuardian = new CreateGuardianService()

    const user = await createGuardian.execute({
      name,
      email,
      password
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

    const authGuardian = new AuthGuardianService()

    const token = await authGuardian.execute({
      email,
      password
    })

    return response.json({
      token
    })
  }

  async update (request: Request, response: Response) {
    const validation = await updateGuardianSchema.isValid(request.body)

    if (!validation) {
      throw new AppError('Erro na validação, verifique seus dados')
    }

    const { name, email, password, newPassword } = request.body

    const updateGuardian = new UpdateGuardianService()

    const user = await updateGuardian.execute({
      id: request.user.id,
      name,
      email,
      password,
      newPassword
    })

    delete user.password

    return response.json({
      user
    })
  }

  async show (request: Request, response: Response) {
    const findGuardian = new FindGuardianService()

    const user = await findGuardian.execute(request.user.id)

    delete user.password

    return response.json({
      user
    })
  }
}

export default new GuardianController()
