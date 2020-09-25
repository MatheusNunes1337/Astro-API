import Question from '../models/question'

const questionController = {
  async index(req, res) {
    return res.status(200).send()
  },

  async create(req, res) {
    try {
      await Question.create(req.body)
      return res.status(200).send()
    } catch (err) {
      return res.status(400).send({ message: err })
    }
  },

  async update(req, res) {
    return res.status(200).send()
  },

  async delete(req, res) {
    return res.status(200).send()
  },

  async answer(req, res) {
    return res.status(200)
  },
}

export default questionController
