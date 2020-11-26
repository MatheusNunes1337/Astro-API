import Router from 'express'
import bookController from '../controllers/bookController'
import auth from '../middlewares/authentication'

const bookRoute = Router()

bookRoute.post('/', auth, bookController.create) //auth
bookRoute.get('/download', bookController.download)

export default bookRoute
