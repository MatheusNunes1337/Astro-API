import bcrypt from 'bcrypt'
import mongoose from '../database'

const { Schema } = mongoose

const schoolSchema = new Schema({
  name: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
    select: false
  },
  city: {
    type: String,
  },
  state: {
    type: String,
  },
  responsavel: {
    type: String,
  },
  email_resp: {
    type: String,
  },
})

schoolSchema.pre('save', async function (next) {
  const hash = await bcrypt.hash(this.password, 10)
  this.password = hash
  next()
})

const School = mongoose.model('School', schoolSchema)

export default School
