import { Router } from 'express'

import userController from '@controllers/user'
import guardianController from '@controllers/guardian'
import authController from '@controllers/auth'
import authMiddleware from '@middlewares/auth'

const routes = Router()

routes.get('/', async (request, response) => {
  return response.json({
    message: 'Hello'
  })
})

routes.post('/user', userController.create)
routes.put('/user', authMiddleware, userController.update)
routes.get('/user', authMiddleware, userController.show)

routes.post('/guardian', guardianController.create)
routes.put('/guardian', guardianController.update)

routes.post('/authentication', authController.create)

export default routes
