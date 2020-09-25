import Admin from '../models/admin'

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
      await Admin.findByIdAndUpdate(req.params.id, req.body)
      return res.status(200).send()
    } catch (err) {
      return res.status(400).send({ message: err })
    }
  },

  async delete(req, res) {
    try {
      await Admin.findByIdAndDelete(req.params.id)
      return res.status(200).send()
    } catch (err) {
      return res.status(400).send({ message: err })
    }
  },
}

export default adminController
