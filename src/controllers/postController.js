import Post from '../models/post'
import multer from 'multer'
import multerConfig from '../config/multer'

const postController = {
  async index(req, res) {
    try {

      if(req.query.p) {
          const post = await Post.findById(req.query.p)
          return res.status(200).send({post})
      }

      const posts = await Post.find()
      return res.status(200).send({posts})
    } catch (err) {
      return res.status(400).send({ message: err })
    }
  },

  async create(req, res) {

    if(req.files) {
      req.body.files = req.files.map(file => {
          return file.filename
      })
    }
    
    try {
      const post = await Post.create(req.body)
      return res.status(200).send({"Post criado com sucesso": post})
    } catch (err) {
      return res.status(400).send({ message: err })
    }
  },

  async update(req, res) {

    if(req.files) {
      req.body.files = req.files.map(file => {
          return file.filename
      })
    }

    try {
      const post = await Post.findByIdAndUpdate(req.params.id, {...req.body}, {new: true})
      return res.status(200).send({message: 'Post atualizado com sucesso', post: post})
    } catch (err) {
      return res.status(400).send({ message: err })
    }
  },

  async delete(req, res) {
    try {
      await Post.findByIdAndDelete(req.params.id)
      return res.status(200).send({ message: 'Post deletado com sucesso' })
    } catch (err) {
      return res.status(400).send({ message: err })
    }
  }
}

export default postController
