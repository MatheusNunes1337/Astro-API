import Admin from '../models/admin'
import bcrypt from 'bcrypt'


const adminController = {
  async find(req, res) {
    try {
      const admin = await Admin.findById(req.adminId)
      return res.status(200).send(admin.username)
    } catch (err) {
      return res.status(400).send({ message: err })
    }
  },

  async update(req, res) {

    try {
      if(req.body.password) {
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
