import * as jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

async function school(req, res, next) {
  let authHeader = req.headers.authorization


  if (!authHeader) {
    return res.status(401).json({ message: 'token is required' })
  }

  const [, token] = authHeader.split(' ')

  try {
    const school = await jwt.verify(token, process.env.SECRET)
    req.schoolId = school.id
    next()
  } catch (error) {
    return res.status(401).json({ message: 'Token invalid!' })
  }
}

export default school