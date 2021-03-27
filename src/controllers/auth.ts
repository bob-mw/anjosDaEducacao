import { Request, Response } from 'express'
import AuthUserService from '@services/authUser'

class AuthController {
  async create (request: Request, response: Response) {
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
}

export default new AuthController()
