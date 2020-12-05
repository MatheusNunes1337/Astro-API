import Router from 'express'
import bookController from '../controllers/bookController'

const bookRoute = Router()

bookRoute.get('/download', bookController.download)

export default bookRoute
