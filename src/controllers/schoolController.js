import School from '../models/school'

const schoolController = {
  async index(req, res) {
    try {
      const schools = await School.find()
      return res.status(200).send(schools)
    } catch (err) {
      return res.status(400).send({ message: err })
    }
  },

  async create(req, res) {
    try {
      await School.create(req.body)
      return res.status(200).send()
    } catch (err) {
      return res.status(400).send({ message: err })
    }
  },

  async update(req, res) {
    try {
      await School.findByIdAndUpdate(req.params.id, req.body)
      return res.status(200).send()
    } catch (err) {
      return res.status(400).send({ message: err })
    }
  },

  async delete(req, res) {
    try {
      await School.findByIdAndDelete(req.params.id)
      return res.status(200).send()
    } catch (err) {
      return res.status(400).send({ message: err })
    }
  },
}

export default schoolController
