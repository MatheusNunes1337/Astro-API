import Router from 'express'
import auth from '../middlewares/authentication'
import student from '../middlewares/student'
import questionController from '../controllers/questionController'

const questionRoute = Router()

questionRoute.get('/', questionController.index)
questionRoute.post('/', auth, questionController.create) 
questionRoute.post('/:id', student, questionController.answer)
questionRoute.delete('/:id', auth, questionController.delete) 
questionRoute.put('/:id', auth, questionController.update) 
questionRoute.put('/tryAgain/:id', questionController.tryAgain)


export default questionRoute
