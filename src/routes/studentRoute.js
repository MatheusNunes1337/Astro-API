import Router from 'express'

const studentRoute = Router()

studentRoute.get('/')
studentRoute.post('/')
studentRoute.delete('/:id')
studentRoute.update('/:id')


export default studentRoute