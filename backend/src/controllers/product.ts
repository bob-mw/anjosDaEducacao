import { Request, Response } from 'express'

import productListSchema from '@validation/productList'

import CreateProductListService from '@services/createProductList'

import AppError from '@errors/appError'

class ProductController {
  async create (request: Request, response: Response) {
    const validation = await productListSchema.isValid(request.body)

    if (!validation) {
      throw new AppError('Erro na validação, utilize o formato correto dessa lista')
    }

    const { name, products } = request.body

    const createProductList = new CreateProductListService()

    const productList = await createProductList.execute({
      owner: request.user.id,
      name,
      products
    })

    return response.json({
      productList
    })
  }
}

export default new ProductController()
