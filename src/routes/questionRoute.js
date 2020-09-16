import Router from 'express'
import auth from '../middlewares/authentication'

const questionRoute = Router()

questionRoute.get('/')
questionRoute.post('/', auth)
questionRoute.delete('/:id', auth)
questionRoute.put('/:id', auth)


export default questionRoute