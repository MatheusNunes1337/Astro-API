import Router from 'express'
import auth from '../middlewares/authentication'
import student from '../middlewares/student'
import questionController from '../controllers/questionController'

const questionRoute = Router()

questionRoute.get('/', questionController.index)
questionRoute.post('/', questionController.create) // auth
questionRoute.post('/:id', student, questionController.answer)
questionRoute.delete('/:id', questionController.delete) // auth
questionRoute.put('/:id', questionController.update) //auth


export default questionRoute
