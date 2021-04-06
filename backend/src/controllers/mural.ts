import { Request, Response } from 'express'

import ShowMuralService from '@services/showMural'

class MuralController {
  async show (request: Request, response: Response) {
    const showMural = new ShowMuralService()

    const mural = await showMural.execute()

    return response.json({
      mural
    })
  }
}

export default new MuralController()
