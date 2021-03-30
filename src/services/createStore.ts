import { getRepository } from 'typeorm'
import { hash } from 'bcryptjs'

import Store from '@entities/store'

interface IStoreData {
  name: string;
  email: string;
  password: string;
  cnpj: string;
  phone: string;
}

class CreateStoreService {
  async execute ({ name, email, password, cnpj, phone }: IStoreData) {
    const storeRepository = getRepository(Store)

    password = await hash(password, 10)

    const user = storeRepository.create({
      name,
      email,
      password,
      cnpj,
      phone
    })

    await storeRepository.save(user)

    return user
  }
}

export default CreateStoreService
