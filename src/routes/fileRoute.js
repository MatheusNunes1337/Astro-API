import Router from 'express'
import fileController from '../controllers/fileController'

const fileRoute = Router()

fileRoute.get('/', fileController.index)
fileRoute.put('/:id', fileController.update)

export default fileRoute
