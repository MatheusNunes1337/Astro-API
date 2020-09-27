import Student from '../models/student'

const studentController = {
  async index(req, res) {
    try {
      const students = await Student.find()
      return res.status(200).send(students)
    } catch (err) {
      return res.status(400).send({ message: err })
    }
  },

  async create(req, res) {
    try {
      await Student.create(req.body)
      // geração do token aqui
      return res.status(200).send()
    } catch (err) {
      return res.status(400).send({ message: err })
    }
  },

  async update(req, res) {
    try {
      await Student.findByIdAndUpdate(req.params.id, req.body)
      return res
        .status(200)
        .send({ message: 'Informações do aluno atualizadas com sucesso' })
    } catch (err) {
      return res.status(400).send({ message: err })
    }
  },

  async delete(req, res) {
    try {
      await Student.findByIdAndDelete(req.params.id)
      return res.status(200).send({ message: 'Aluno deletado com sucesso' })
    } catch (err) {
      return res.status(400).send({ message: err })
    }
  },
}

export default studentController
