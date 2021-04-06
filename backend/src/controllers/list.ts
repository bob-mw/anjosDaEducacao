import { Request, Response } from 'express'

import lists from '@config/lists'

import listSchema from '@validation/list'

import AppError from '@errors/appError'

class ListController {
  async show (request: Request, response: Response) {
    const validation = await listSchema.isValid(request.body)

    if (!validation) {
      throw new AppError('Lista inválida, selecione uma das listas disponíveis')
    }

    const { list } = request.body

    const materialList = lists[list]

    return response.json(materialList)
  }
}

export default new ListController()
