import { Router } from 'express'

import userController from '@controllers/user'
import authController from '@controllers/auth'

const routes = Router()

routes.get('/', async (request, response) => {
  return response.json({
    message: 'Hello'
  })
})

routes.post('/user', userController.create)
routes.post('/authentication', authController.create)

export default routes
