import Router from 'express'
import schoolController from '../controllers/schoolController'
import auth from '../middlewares/authentication'

const SchoolRoute = Router()

SchoolRoute.get('/', schoolController.index)
SchoolRoute.post('/', auth, schoolController.create)
SchoolRoute.delete('/:id', auth, schoolController.delete)
SchoolRoute.put('/:id', auth, schoolController.update)

export default SchoolRoute
