import Router from 'express'
import adminController from '../controllers/adminController'

const adminRoute = Router()

adminRoute.get('/', adminController.index)
adminRoute.delete('/:id', adminController.delete)
adminRoute.put('/:id', adminController.update)

export default adminRoute
