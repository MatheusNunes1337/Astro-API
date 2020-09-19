import Router from 'express'

const postRoute = Router()

postRoute.get('/')
postRoute.post('/')
postRoute.delete('/:id')
postRoute.put('/:id')

export default postRoute
