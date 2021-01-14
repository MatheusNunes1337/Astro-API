import Router from 'express'
import schoolController from '../controllers/schoolController'
import auth from '../middlewares/authentication'

const SchoolRoute = Router()

SchoolRoute.get('/', schoolController.index)
SchoolRoute.post('/register', auth, schoolController.create)
SchoolRoute.post('/login', auth, schoolController.login)
SchoolRoute.delete('/:id', auth, schoolController.delete)
SchoolRoute.put('/:id', auth, schoolController.update)

export default SchoolRoute
