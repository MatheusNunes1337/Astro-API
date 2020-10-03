import mongoose from '../database'
import File from './file'

const { Schema } = mongoose

const postSchema = new Schema({
  titulo: {
    type: String,
    unique: true,
  },
  categoria: {
    type: String,
  },
  conteudo: {
    type: String,
  },
  files: [
    {
      type: Schema.Types.ObjectId,
      ref: 'File',
    },
  ],
})

const Post = mongoose.model('Post', postSchema)

export default Post
