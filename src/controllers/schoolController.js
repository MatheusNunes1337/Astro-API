import dotenv from 'dotenv'
import * as jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import School from '../models/school'

const schoolController = {
  async index(req, res) {
    try {

      if (req.query.s) {
        const school = await School.findById(req.query.s)
        return res.status(200).send(school)
      }

      const schools = await School.find()
      return res.status(200).send(schools)
    } catch (err) {
      return res.status(400).send({ message: err })
    }
  },

  async create(req, res) {
    try {
      const school = await School.create(req.body)
      return res.status(200).send({message: 'Instituição cadastrada com sucesso.'})
    } catch (err) {
      return res.status(400).send({ message: err })
    }
  },

  async login(req, res) {
    const { email_resp, password } = req.body
    try {
        const school = await School.findOne({ email_resp }).select('password')

        if (!school)
          return res
            .status(400)
            .send({ message: 'O email informado está incorreto.' })

        if (!(await bcrypt.compare(password, school.password)))
          return res.status(400).send({ message: 'A senha informada está incorreta.' })
        
        const token = await jwt.sign({ id: school._id }, process.env.SECRET, {
          expiresIn: '1d',
        })
        return res.status(200).send(token)
    } catch(err) {
        return res.status(400).send({ message: err }) 
    }  
  },

  async update(req, res) {
    try {
      const school = await School.findByIdAndUpdate(req.params.id, {...req.body}, {new: true})
      return res.status(200).send({message: 'Informações da Instituição atualizadas com sucesso', informações: school})
    } catch (err) {
      return res.status(400).send({ message: err })
    }
  },

  async updatePassword(req, res) {
    try {
      let {email_resp, password} = req.body
      password = await bcrypt.hash(password, 10)
      const school = await School.findOneAndUpdate({ email_resp }, { password })
      return res.status(200).send({message: 'Senha redefinida com sucesso'})
    } catch (err) {
      return res.status(400).send({ message: err })
    }
  },

  async delete(req, res) {
    try {
      await School.findByIdAndDelete(req.params.id)
      return res.status(200).send({ message: 'Instituição deletada com sucesso' })
    } catch (err) {
      return res.status(400).send({ message: err })
    }
  },
}

export default schoolController
