import Router from 'express'
import postController from '../controllers/postController'
import auth from '../middlewares/authentication'

const postRoute = Router()

postRoute.get('/', postController.index)
postRoute.post('/', auth, postController.create)
postRoute.delete('/:id', auth, postController.delete)
postRoute.put('/:id', auth, postController.update)

export default postRoute
