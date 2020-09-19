import mongoose from '../database'

const { Schema } = mongoose

const postSchema = new Schema({
  titulo: {
    type: String,
    maxlength: [70, 'O título deve conter no máximo 70 caracteres'],
    unique: true,
  },
  categoria: {
    type: String,
    maxlength: [50, 'A categoria deve conter no máximo 50 caracteres'],
  },
  conteudo: {
    type: String,
  },
})

const Post = mongoose.model('Post', postSchema)

export default Post
