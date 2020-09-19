import mongoose from '../database'

const { Schema } = mongoose

const questionSchema = new Schema({
  question: {
    type: String,
    maxlength: [200, 'O título deve conter no máximo 200 caracteres'],
    unique: true,
  },
  category: {
    type: String,
  },
  options: [
    {
      type: String,
      maxlength: [50, 'A opção deve conter no máximo 50 caracteres'],
    },
  ],
  answer: {
    type: String,
  },
})

const Question = mongoose.model('Question', questionSchema)

export default Question
