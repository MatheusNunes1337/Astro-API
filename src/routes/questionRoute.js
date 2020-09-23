import Router from 'express'
import auth from '../middlewares/authentication'
import questionController from '../controllers/questionController'


const questionRoute = Router()

questionRoute.get('/', questionController.index)
questionRoute.post('/', auth, questionController.post)
questionRoute.delete('/:id', auth, questionController.delete)
questionRoute.put('/:id', auth, questionController.update)


export default questionRoute