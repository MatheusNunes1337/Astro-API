import Student from '../models/student'

const quizController = {
  
  async tryAgain(req, res) {
    try {
      const student = await Student.findByIdAndUpdate(
        req.studentId,
        { $set: {acertos: 0}}
      )
      return res
        .status(200)
        .send()
    } catch (err) {
      return res.status(400).send({ message: err })
    }
  },
}

export default quizController
