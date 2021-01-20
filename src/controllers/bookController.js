import * as path from 'path'
import dotenv from 'dotenv'
import Question from '../models/question'
import Post from '../models/post'

import * as pdf from 'html-pdf'
import * as ejs from 'ejs'

const bookController = {
  async download(req, res) {
    try {
      const questoes = await Question.find()
      const postagens = await Post.find()

      const book = await ejs.renderFile(
        path.resolve(__dirname, '..', 'views', 'book.ejs'),
        { questions: questoes, posts: postagens })
       
        const options = {
          type: 'pdf',
          format: 'A4',
          orientation: 'portrait',
          base: process.env.APP_URL,
          border: {
            top: "1in",            
            bottom: "1in"
          }
        }  
        
        pdf.create(book, options).toFile(
          path.resolve(__dirname, '..', 'assets', 'material', 'apostila.pdf'), 
          function(err, res){
            if (err) return console.log(err);
            console.log('pdf gerado com sucesso')
        }) 

      const apostila = path.resolve(__dirname, '..', 'assets', 'material', 'apostila.pdf')
      //return res.status(200).download(apostila) 
      return res.status(200).send({'message': 'recurso desabilitado temporariamente'})  
    } catch (err) {
      return res.status(400).send({ message: err })
    }
  }
}

export default bookController
