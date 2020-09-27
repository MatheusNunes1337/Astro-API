import Admin from '../models/admin'
import bcrypt from 'bcrypt'


const adminController = {
  async index(req, res) {
    try {
      const admins = await Admin.find()
      return res.status(200).send(admins)
    } catch (err) {
      return res.status(400).send({ message: err })
    }
  },

  async update(req, res) {

    try {
      if(req.body.password) {
        console.log('tem senha')
         console.log(req.body)
        const hash = await bcrypt.hash(req.body.password, 10)
        console.log(hash)
        req.body.password = hash
        
      }

      const admin = await Admin.findByIdAndUpdate(req.adminId, {...req.body}, {new: true})
      return res.status(200).send({'informações atualizadas': admin})
    } catch (err) {
      return res.status(400).send({ message: err })
    }
  },

  async delete(req, res) {
    try {
      await Admin.findByIdAndDelete(req.adminId)
      return res.status(200).send({'message': 'Conta de admin deletada com sucesso'})
    } catch (err) {
      return res.status(400).send({ message: err })
    }
  },
}

export default adminController
