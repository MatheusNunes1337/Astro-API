import mongoose from '../database'
import School from './school'

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
  acertos: {
    // eslint-disable-next-line prettier/prettier
    type: Number,
    default: 0,
  },
})

const Student = mongoose.model('Student', studentSchema)

export default Student
