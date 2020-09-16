import Router from 'express'
import auth from '../middlewares/authentication'

const studentRoute = Router()

studentRoute.get('/')
studentRoute.post('/')
studentRoute.delete('/:id', auth)
studentRoute.update('/:id', auth)


export default studentRoute