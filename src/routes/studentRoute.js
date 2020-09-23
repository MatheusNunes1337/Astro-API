import Router from 'express'
import auth from '../middlewares/authentication'
import studentController from '../controllers/studentController'

const studentRoute = Router()

studentRoute.get('/', studentController.index)
studentRoute.post('/', studentController.create)
studentRoute.delete('/:id', auth, studentController.delete)
studentRoute.put('/:id', auth, studentController.update)

export default studentRoute
