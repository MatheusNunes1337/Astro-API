import mongoose from 'mongoose'

const { Schema } = mongoose

const postSchema = new Schema({
  titulo: {
    type: String,
    unique: true
  },
  categoria: {
    type: String
  },
  conteudo: {
    type: String
  },
  files: [{
    type: String
  }]
})

const Post = mongoose.model('Post', postSchema)

export default Post
