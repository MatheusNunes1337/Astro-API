import Question from '../models/question'
import Student from '../models/student'

const questionController = {
  async index(req, res) {
    try {
      const questions = await Question.find()
      return res.status(200).send({questions})
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
      const question = await Question.findByIdAndUpdate(req.params.id, {...req.body}, {new: true})
      return res.status(200).send({ message: 'Questão atualizada com sucesso', question: question })
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

    const { answer } =  req.body


    try {
       const question = await Question.findById(req.params.id)
       if(question.answer === answer) {
           student = await Student.findByIdAndUpdate(req.studentId, {$inc : {'acertos' : 1}}, {new: true})
       }
       return res.status(200).send()
    } catch(err) {
        return res.status(400).send({ message: err })
    }

    
  }
}

export default questionController
