import Question from '../models/question'

const questionController = {
  async index(req, res) {
    try {
      const questions = await Question.find()
      return res.status(200).send({ questoes: questions})
    } catch (err) {
      return res.status(400).send({ message: err })
    }
  },

  async create(req, res) {
    try {
      await Question.create(req.body)
      return res.status(200).send({ message: 'Questão criada com sucesso' })
    } catch (err) {
      return res.status(400).send({ message: err })
    }
  },

  async update(req, res) {
    try {
      await Question.findByIdAndUpdate(req.params.id, req.body)
      return res.status(200).send({ message: 'Questão atualizada com sucesso' })
    } catch (err) {
      return res.status(400).send({ message: err })
    }
  },

  async delete(req, res) {
    try {
      await Question.findByIdAndDelete(req.params.id)
      return res.status(200).send({ message: 'Questão deletada com sucesso' })
    } catch (err) {
      return res.status(400).send({ message: err })
    }
  },

  async answer(req, res) {
    return res.status(200)
  }
}

export default questionController
