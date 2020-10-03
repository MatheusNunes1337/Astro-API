import mongoose from '../database'

const { Schema } = mongoose

const fileSchema = new Schema({
  filename: {
    type: String,
    unique: true,
  },
  description: {
    type: String,
  },
  alt: {
    type: String,
  },
})

const File = mongoose.model('File', fileSchema)

export default File
