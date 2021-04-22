import Router from 'express'
import bookController from '../controllers/bookController'

const bookRoute = Router()

bookRoute.post('/download', bookController.download)
bookRoute.post('/generate', bookController.generate)

export default bookRoute
