import { getRepository } from 'typeorm'
import { hash } from 'bcryptjs'

import User from '@entities/user'

interface IUserData {
  name: string;
  email: string;
  password: string;
  student?: boolean;
}

class CreateUserService {
  public async execute (
  { name, email, password, student = false }: IUserData) {
    const userRepository = getRepository(User)

    const exists = await userRepository.findOne({
      where: {
        email
      }
    })

    password = await hash(password, 10)

    if (exists) {
      throw new Error('O usuario já existe')
    }

    const user = userRepository.create({
      name,
      email,
      password,
      student
    })

    await userRepository.save(user)

    return user
  }
}

export default CreateUserService
