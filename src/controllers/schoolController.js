import School from '../models/school'

const schoolController = {
  async index(req, res) {
    try {

      if (req.query.s) {
        const school = await Post.findById(req.query.s)
        return res.status(200).send({ school })
      }

      const schools = await School.find()
      return res.status(200).send(schools)
    } catch (err) {
      return res.status(400).send({ message: err })
    }
  },

  async create(req, res) {
    try {
      const school = await School.create(req.body)
      return res.status(200).send({"Instituição cadastrada com sucesso": school})
    } catch (err) {
      return res.status(400).send({ message: err })
    }
  },

  async update(req, res) {
    try {
      const school = await School.findByIdAndUpdate(req.params.id, {...req.body}, {new: true})
      return res.status(200).send({message: 'Informações da Instituição atualizadas com sucesso', informações: school})
    } catch (err) {
      return res.status(400).send({ message: err })
    }
  },

  async delete(req, res) {
    try {
      await School.findByIdAndDelete(req.params.id)
      return res.status(200).send({ message: 'Instituição deletada com sucesso' })
    } catch (err) {
      return res.status(400).send({ message: err })
    }
  },
}

export default schoolController
