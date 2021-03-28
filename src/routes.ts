import { Router } from 'express'

import userController from '@controllers/user'
import guardianController from '@controllers/guardian'
import authMiddleware from '@middlewares/auth'

const routes = Router()

routes.get('/', async (request, response) => {
  return response.json({
    message: 'Hello'
  })
})

routes.post('/user', userController.create)
routes.post('/user/authentication', userController.session)
routes.put('/user', authMiddleware, userController.update)
routes.get('/user', authMiddleware, userController.show)

routes.post('/guardian', guardianController.create)
routes.post('/guardian/authentication', guardianController.session)
routes.put('/guardian', authMiddleware, guardianController.update)

export default routes
