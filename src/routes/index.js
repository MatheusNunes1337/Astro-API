import Router from 'express'

import questionRoute from './questionRoute'
import authRoute from './authRoute'
import postRoute from './postRoute'


const routes = Router()

routes.use('/auth', authRoute)
routes.use('/post', postRoute)
routes.use('/question', questionRoute)

export default routes