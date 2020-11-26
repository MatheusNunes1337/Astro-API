import Router from 'express'
import postController from '../controllers/postController'
import auth from '../middlewares/authentication'
import multer from 'multer'
import multerConfig from '../config/multer'

const postRoute = Router()

postRoute.get('/', postController.index)
postRoute.post('/', auth, multer(multerConfig).array('files', 5), postController.create)
postRoute.delete('/:id', auth, postController.delete)
postRoute.put('/:id', auth, multer(multerConfig).array('files', 5), postController.update)

export default postRoute
