import { Request, Response } from 'express'
import CreateGuardianService from '@services/createGuardian'
import UpdateGuardianService from '@services/updateGuardian'

import createGuardianSchema from '@validation/createGuardian'
import updateGuardianSchema from '@validation/updateGuardian'

import AppError from '@errors/appError'

class GuardianController {
  async create (request: Request, response: Response) {
    const validation = await createGuardianSchema.isValid(request.body)

    if (!validation) {
      throw new AppError('Erro na validação, verifique seus dados')
    }

    const { name, email, password, cpf, phone } = request.body

    const createGuardian = new CreateGuardianService()

    const user = await createGuardian.execute({
      name,
      email,
      password,
      cpf,
      phone
    })

    return response.status(201).json({
      user
    })
  }

  async update (request: Request, response: Response) {
    const validation = await updateGuardianSchema.isValid(request.body)

    if (!validation) {
      throw new AppError('Erro na validação, verifique seus dados')
    }

    const { name, email, password, newPassword, phone } = request.body

    const updateGuardian = new UpdateGuardianService()

    const user = await updateGuardian.execute({
      id: request.user.id,
      name,
      email,
      password,
      newPassword,
      phone
    })

    return response.json({
      user
    })
  }
}

export default new GuardianController()
