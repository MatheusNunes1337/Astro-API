import Router from 'express'
import postController from '../controllers/postController'
import multer from 'multer'
import multerConfig from '../config/multer'

const postRoute = Router()

postRoute.get('/', postController.index)
postRoute.post('/', multer(multerConfig).array('files', 5), postController.create)
postRoute.delete('/:id', postController.delete)
postRoute.put('/:id', multer(multerConfig).array('files', 5), postController.update)

export default postRoute
