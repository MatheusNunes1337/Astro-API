import Router from 'express'
import auth from '../middlewares/authentication'
import studentController from '../controllers/studentController'
import student from '../middlewares/student'

const studentRoute = Router()

studentRoute.get('/', studentController.index)
studentRoute.get('/find', student, studentController.find)
studentRoute.post('/', studentController.create)
studentRoute.delete('/:id', auth, studentController.delete) // auth
studentRoute.put('/:id', auth, studentController.update) // auth

export default studentRoute
