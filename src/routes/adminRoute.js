import Router from 'express'
import adminController from '../controllers/adminController'
import auth from '../middlewares/authentication'

const adminRoute = Router()

adminRoute.get('/', auth, adminController.index)
adminRoute.delete('/', auth, adminController.delete)
adminRoute.put('/', auth, adminController.update)

export default adminRoute
