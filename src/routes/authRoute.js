import Router from 'express'
import authController from '../controllers/authController'

const authRoute = Router()

authRoute.post('/login', authController.login)
authRoute.post('/register', authController.register)

export default authRoute
