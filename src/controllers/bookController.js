import { resolve } from 'path'
import Question from '../models/question'
import Post from '../models/post'

const pdf = require('html-pdf')
const ejs = require('ejs')

const bookController = {
  async create(req, res) {
    try {
      const questoes = await Question.find()
      const postagens = await Post.find()

      ejs.renderFile(
        `${__dirname}/../view/book.ejs`,
        { questions: questoes, posts: postagens },
        (err, book) => {
          if (err) console.log(err)
          else {
            const options = {
              filename: 'apostila.pdf',
              format: 'A4',
              orientation: 'portrait',
              directory: resolve(__dirname, '..', '..', 'public', 'images'),
              type: 'pdf',
            }

            console.log(resolve(__dirname, '..', '..', 'public', 'images'))
            pdf.create(book, options).toFile(function (err, res) {
              if (err) return console.log({ message: err })
            })
          }
        }
      )

      return res.status(200).send({ message: 'pdf gerado com sucesso' })
    } catch (err) {
      return res.status(400).send({ message: err })
    }
  },

  async download(req, res) {
    const apostila = `${__dirname}../../../apostila.pdf`
    res.status(200).download(apostila)
  },
}

export default bookController
