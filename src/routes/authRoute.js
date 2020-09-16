import Router from 'express'
import authController from '../controllers/authentication'

const authRoute = Router()

authRoute.post('/login', authController.login)
authRoute.post('/register', authController.register)

export default authRoute