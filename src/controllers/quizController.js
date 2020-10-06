import Student from '../models/student'

const quizController = {
  
  async tryAgain(req, res) {
    try {
      const file = await Student.findByIdAndUpdate(
        req.studentId,
        { $set: {acertos: 0}}
      )
      return res
        .status(200)
        .send({ message: 'Arquivo atualizado com sucesso', file })
    } catch (err) {
      return res.status(400).send({ message: err })
    }
  },
}

export default quizController
