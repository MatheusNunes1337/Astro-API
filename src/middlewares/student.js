import * as jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

async function student(req, res, next) {
  let authHeader = req.headers.authorization


  if (!authHeader) {
    return res.status(401).json({ message: 'token is required' })
  }

  const [, token] = authHeader.split(' ')

  try {
    const student = await jwt.verify(token, process.env.SECRET)
    req.studentId = student.id
    next()
  } catch (error) {
    return res.status(401).json({ message: 'Token invalid!' })
  }
}

export default student