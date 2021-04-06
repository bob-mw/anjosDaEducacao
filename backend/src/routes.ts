import { Router } from 'express'

import userController from '@controllers/user'
import guardianController from '@controllers/guardian'
import storeController from '@controllers/store'
import listController from '@controllers/list'
import productController from '@controllers/product'
import wishController from '@controllers/wish'
import donationController from '@controllers/donation'
import muralController from '@controllers/mural'

import authMiddleware from '@middlewares/auth'
import upload from '@middlewares/upload'

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
routes.get('/guardian', authMiddleware, guardianController.show)

routes.post('/store', storeController.create)
routes.post('/store/authentication', storeController.session)
routes.put('/store', authMiddleware, storeController.update)
routes.get('/store', authMiddleware, storeController.show)

routes.get('/list', listController.show)

routes.post('/product', authMiddleware, productController.create)

routes.post('/wish', authMiddleware, wishController.create)
routes.get('/wish', authMiddleware, wishController.show)
routes.put('/wish', authMiddleware, wishController.update)
routes.patch('/wish', authMiddleware, upload.single('photo'), wishController.photo)

routes.get('/donation', donationController.show)

routes.get('/mural', muralController.show)

export default routes
