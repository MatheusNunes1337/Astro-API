import * as jwt from 'jsonwebtoken'
import Student from '../models/student'

const studentController = {
  async index(req, res) {
    try {

      if (req.query.s) {
        const student = await Post.findById(req.query.s).populate('school')
        return res.status(200).send(student)
      }

      const students = await Student.find().populate('school')
      return res.status(200).send(students)
    } catch (err) {
      return res.status(400).send({ message: err })
    }
  },

  async find(req, res) {
      try {
        const student = await Post.findById(studentId).populate('school')
        return res.status(200).send(student)    
      } catch (err) {
          return res.status(400).send({ message: err })
      }
  },

  async create(req, res) {
    try {
      const student = await Student.create(req.body)
      const token = await jwt.sign({ id: student._id }, process.env.SECRET, {
        expiresIn: '1d',
      })
      return res.status(200).send({ token })
    } catch (err) {
      return res.status(400).send({ message: err })
    }
  },

  async update(req, res) {
    try {
      const student = await Student.findByIdAndUpdate(
        req.params.id,
        { ...req.body },
        { new: true }
      ).populate('school')
      return res.status(200).send({
        message: 'Informações do aluno atualizadas com sucesso',
        informações: student,
      })
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
