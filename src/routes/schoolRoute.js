import Router from 'express'
import schoolController from '../controllers/schoolController'

const SchoolRoute = Router()

SchoolRoute.get('/', schoolController.index)
SchoolRoute.post('/', schoolController.create)
SchoolRoute.delete('/:id', schoolController.delete)
SchoolRoute.put('/:id', schoolController.update)

export default SchoolRoute
