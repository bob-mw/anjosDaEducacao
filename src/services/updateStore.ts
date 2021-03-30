import { getRepository } from 'typeorm'
import { compare, hash } from 'bcryptjs'

import Store from '@entities/store'

import AppError from '@errors/appError'

interface IStoreData {
  id: string;
  name: string;
  email: string;
  password: string;
  newPassword?: string;
  cnpj: string;
  phone: string;
}

class UpdateGuardianService {
  public async execute ({ id, name, email, password, newPassword, cnpj, phone }: IStoreData) {
    const storeRepository = getRepository(Store)

    const store = await storeRepository.findOne({
      where: {
        id
      }
    })

    if (!store) {
      throw new AppError('Usuario não encontrado')
    }

    const passwordMatch = await compare(password, store.password)

    if (!passwordMatch) {
      throw new AppError('Senha invalida', 401)
    }

    if (store.email !== email) {
      const exists = await storeRepository.findOne({
        where: {
          email
        }
      })

      if (exists) {
        throw new AppError('Email já está em uso', 401)
      }
    }

    if (store.phone !== phone) {
      const exists = await storeRepository.findOne({
        where: {
          phone
        }
      })

      if (exists) {
        throw new AppError('O número pertence a outro usuário', 401)
      }
    }

    if (newPassword) {
      store.password = await hash(newPassword, 10)
    }

    store.email = email
    store.name = name
    store.cnpj = cnpj
    store.phone = phone

    await storeRepository.save(store)

    return store
  }
}

export default UpdateGuardianService
