import mongoose from '../database'

const { Schema } = mongoose

const questionSchema = new Schema({
  question: {
    type: String,
    unique: true,
  },
  category: {
    type: String,
  },
  options: [
    {
      type: String,
    },
  ],
  answer: {
    type: String,
  },
  fullAnswer: {
    type: String,
  }
})

const Question = mongoose.model('Question', questionSchema)

export default Question
