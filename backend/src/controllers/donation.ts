import { Request, Response } from 'express'

import ShowDonationService from '@services/showDonation'

class DonationController {
  async show (request: Request, response: Response) {
    const showDonation = new ShowDonationService()

    const wish = await showDonation.execute()

    return response.json(wish)
  }
}

export default new DonationController()
