import * as fs from 'fs'
import { promisify } from 'util'
import * as path from 'path'
import Post from '../models/post'
import File from '../models/file'

const postController = {
  async index(req, res) {
    try {
      if (req.query.p) {
        const post = await Post.findById(req.query.p)
        return res.status(200).send(post)
      }

      const posts = await Post.find()
      return res.status(200).send(posts)
    } catch (err) {
      return res.status(400).send({ message: err })
    }
  },

  async create(req, res) {

    try {

      /*
      if(req.files) {
        let files

        files = req.files.map(async (file) => {
          // eslint-disable-next-line prefer-const
          let arquivo = await File.create({ filename: file.filename })
          return arquivo._id
        })

        req.body.files = await Promise.all(files)
      }
      */  

      await Post.create(req.body)
      return res.status(200).send({message: 'Post criado com sucesso'})
    } catch (err) {
      return res.status(400).send({ message: err })
    }
    
  },

  async update(req, res) {
    try {
      /*
      if (req.files) {
        const post = await Post.findById(req.params.id).populate('files')
        if (post.files.length !== 0) {
          await File.deleteMany({ _id: post.files })
          post.files.map(async (arquivo) => {
            return promisify(fs.unlink)(
              path.resolve(
                __dirname,
                '..',
                '..',
                'public',
                'images',
                arquivo.filename
              )
            )
          })
        }

        let files

        files = req.files.map(async (file) => {
          // eslint-disable-next-line prefer-const
          let arquivo = await File.create({ filename: file.filename })
          return arquivo._id
        })

        req.body.files = await Promise.all(files)
      }

      */

      const post = await Post.findByIdAndUpdate(
        req.params.id,
        { ...req.body },
        { new: true }
      )
      return res
        .status(200)
        .send({ message: 'Post atualizado com sucesso', post })
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
  },
}

export default postController
