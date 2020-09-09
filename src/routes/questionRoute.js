import Router from 'express'

const questionRoute = Router()

questionRoute.get('/')
questionRoute.post('/')
questionRoute.delete('/:id')
questionRoute.put('/:id')


export default questionRoute