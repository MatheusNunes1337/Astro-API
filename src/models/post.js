import dotenv from 'dotenv'
dotenv.config()

if(process.env.NODE_ENV === 'test') {
   import mongoose from 'mongoose'
} else {
  import mongoose from '../database'
}

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
      type: String,
    },
  ],
})

const Post = mongoose.model('Post', postSchema)

export default Post
