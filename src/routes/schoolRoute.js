import Router from 'express'
import schoolController from '../controllers/schoolController'
import auth from '../middlewares/authentication'

const SchoolRoute = Router()

SchoolRoute.get('/', schoolController.index)
SchoolRoute.post('/register', schoolController.create)
SchoolRoute.post('/login', schoolController.login)
SchoolRoute.delete('/:id', auth, schoolController.delete)
SchoolRoute.put('/:id', auth, schoolController.update)
SchoolRoute.put('/', schoolController.updatePassword)

export default SchoolRoute
