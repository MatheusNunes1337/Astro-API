import mongoose from '../database'
import School from './school'
import Question from './question'

const { Schema } = mongoose

const studentSchema = new Schema({
  name: {
    type: String,
  },
  age: {
    type: Number,
  },
  school: {
    type: Schema.Types.ObjectId,
    // eslint-disable-next-line prettier/prettier
    ref: 'School'
  },
  acertos: [{
    type: Schema.Types.ObjectId,
    ref: 'Question'
  }],
})

const Student = mongoose.model('Student', studentSchema)

export default Student
