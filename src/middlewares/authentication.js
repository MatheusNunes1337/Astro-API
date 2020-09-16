import * as jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

async function auth(req, res, next) {
  const authHeader = req.headers.authorization

  if (!authHeader)
    return res.status(401).json({ message: 'Token is required!' })

  const [, token] = authHeader.split(' ')

  try {
    const admin = await jwt.verify(token, process.env.SECRET)
    req.adminId = admin.id
    next()
  } catch (error) {
    return res.status(401).json({ message: 'Token invalid!' })
  }
}

export default auth