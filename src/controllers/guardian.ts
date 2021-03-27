import { Request, Response } from 'express'
import CreateGuardianService from '@services/createGuardian'

import createGuardianSchema from '@validation/createGuardian'
import updateGuardianSchema from '@validation/updateGuardian'

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

    return response.status(201).json({
      user
    })
  }

  async update (request: Request, response: Response) {
    const validation = await updateGuardianSchema.isValid(request.body)

    if (!validation) {
      throw new AppError('Erro na validação, verifique seus dados')
    }
  }
}

export default new GuardianController()
