import dotenv from 'dotenv'

dotenv.config()

if(process.env.NODE_ENV === 'test') {
   import mongoose from 'mongoose'
} else {
  import mongoose from '../database'
}

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
})

const Question = mongoose.model('Question', questionSchema)

export default Question
