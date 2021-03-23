import { Request, Response } from 'express'
import CreateUserService from '@services/createUser'

class UserController {
  async create (request: Request, response: Response) {
    const { name, email, password, student } = request.body

    const createUserService = new CreateUserService()

    const user = await createUserService.execute({
      name,
      email,
      password,
      student
    })

    delete user.password

    return response.status(201).json({
      user
    })
  }
}

export default new UserController()
