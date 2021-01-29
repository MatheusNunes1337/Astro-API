import Router from 'express'
import auth from '../middlewares/authentication'
import studentController from '../controllers/studentController'
import school from '../middlewares/school'
import student from '../middlewares/student'

const studentRoute = Router()

studentRoute.get('/', studentController.index)
studentRoute.get('/find', student, studentController.find)
studentRoute.get('/findBySchool', school, studentController.findBySchool)
studentRoute.post('/', studentController.create)
studentRoute.delete('/:id', auth, studentController.delete) 
studentRoute.put('/:id', auth, studentController.update)

export default studentRoute
