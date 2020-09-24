import Router from 'express'
import auth from '../middlewares/authentication'
import questionController from '../controllers/questionController'

const questionRoute = Router()

questionRoute.get('/', questionController.index)
questionRoute.post('/', questionController.create) // auth
questionRoute.delete('/:id', questionController.delete) // auth
questionRoute.put('/:id', auth, questionController.update)

export default questionRoute
