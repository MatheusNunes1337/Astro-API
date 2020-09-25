import Post from '../models/post'

const postController = {
  async index(req, res) {
    return res.status(200).send()
  },

  async create(req, res) {
    try {
      await Post.create(req.body)
      return res.status(200).send({ message: 'Post criado com sucesso' })
    } catch (err) {
      return res.status(400).send({ message: err })
    }
  },

  async update(req, res) {
    return res.status(200).send()
  },

  async delete(req, res) {
    return res.status(200).send()
  },
}

export default postController
