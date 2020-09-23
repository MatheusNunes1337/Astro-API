import Router from 'express'
import postController from '../controllers/postController'

const postRoute = Router()

postRoute.get('/', postController.index)
postRoute.post('/', postController.create)
postRoute.delete('/:id', postController.delete)
postRoute.put('/:id', postController.update)

export default postRoute
