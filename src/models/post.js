import mongoose from '../database'

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
  planeta: {
    type: String
  }
})

const Post = mongoose.model('Post', postSchema)

export default Post
