import bcrypt from 'bcrypt'
import mongoose from '../database'

const { Schema } = mongoose

const adminSchema = new Schema({
  username: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
    // eslint-disable-next-line prettier/prettier
    select: false
  },
})

adminSchema.pre('save', async function (next) {
  const hash = await bcrypt.hash(this.password, 10)
  this.password = hash
  next()
})

const Admin = mongoose.model('Admin', adminSchema)

export default Admin
