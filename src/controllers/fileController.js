import File from '../models/file'

const fileController = {
  async index(req, res) {
    try {
      const files = await File.find({ description: null })
      return res.status(200).send({ files })
    } catch (err) {
      return res.status(400).send({ message: err })
    }
  },

  async update(req, res) {
    try {
      const file = await File.findByIdAndUpdate(
        req.params.id,
        { ...req.body },
        { new: true }
      )
      return res
        .status(200)
        .send({ message: 'Arquivo atualizado com sucesso', file })
    } catch (err) {
      return res.status(400).send({ message: err })
    }
  },
}

export default fileController
