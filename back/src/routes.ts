import { Router } from 'express'

import userController from '@controllers/user'

const routes = Router()

routes.get('/', async (request, response) => {
  return response.json({
    message: 'Hello'
  })
})

routes.post('/user', userController.CreateUser)

export default routes
