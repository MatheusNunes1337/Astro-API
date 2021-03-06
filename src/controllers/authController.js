import dotenv from 'dotenv'
import * as jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import Admin from '../models/admin'

dotenv.config()

const authController = {
  async login(req, res) {
    const { username, password } = req.body
    try {
        const admin = await Admin.findOne({ username }).select('password')

        if (!admin)
          return res
            .status(400)
            .send({ message: 'Nome de usuário informado está incorreto' })

        if (!(await bcrypt.compare(password, admin.password))) 
          return res.status(400).send({ message: 'A senha informada está incorreta' })

        const token = await jwt.sign({ id: admin._id }, process.env.SECRET, {
          expiresIn: '1d',
        })
        return res.status(200).send(token)
    } catch(err) {
        return res.status(400).send({ message: err }) 
    }    
  },

  async register(req, res) {
    const { username, password } = req.body

    try {
      const administrador = await Admin.findOne({ username })

      if (administrador)
        return res.status(400).send({ err: 'Esse nome de usuário já existe' })


      const admin = await new Admin(req.body)
      await admin.save()
      admin.password = undefined

      return res.status(200).send({
        message: 'Admin cadastrado no sistema com sucesso',
        token: await jwt.sign({ id: admin._id }, process.env.SECRET, {
          expiresIn: '1d',
        }),
      })
    } catch (err) {
      return res.status(400).send({ message: err })
    }
  }
}

export default authController
