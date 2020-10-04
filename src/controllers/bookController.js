import * as path from 'path'
import Question from '../models/question'
import Post from '../models/post'

import * as pdf from 'html-pdf'
import * as ejs from 'ejs'

const bookController = {
  async create(req, res) {
    try {
      const questoes = await Question.find()
      const postagens = await Post.find()

      const book = await ejs.renderFile(
        `${__dirname}/../views/book.ejs`,
        { questions: questoes, posts: postagens })
       
        const options = {
          type: 'pdf',
          format: 'A4',
          orientation: 'portrait',
          base: "http://localhost:3000",
          border: {
            top: "1in",            
            bottom: "1in"
          }
        }  
        
        pdf.create(book, options).toFile(
          path.resolve(__dirname, '..', '..', 'public', 'material', 'apostila.pdf'), 
          function(err, res){
          
        })  

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
