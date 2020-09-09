import Router from 'express'

const authRoute = Router()

authRoute.post('/login')
authRoute.post('/register')

export default authRoute