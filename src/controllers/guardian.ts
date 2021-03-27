import { Request, Response } from 'express'
import CreateGuardianService from '@services/createGuardian'

import createGuardianSchema from '@validation/createGuardian'

import AppError from '@errors/appError'

class GuardianController {
  async create (request: Request, response: Response) {
    const validation = createGuardianSchema.isValid(request.body)

    if (!validation) {
      throw new AppError('Erro na validação, verifique seus dados', 401)
    }

    const { name, email, password } = request.body

    const createGuardian = new CreateGuardianService()

    const user = createGuardian.execute({
      name,
      email,
      password
    })

    return response.status(201).json({
      user
    })
  }
}

export default new GuardianController()
