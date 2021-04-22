import * as path from 'path'
import dotenv from 'dotenv'
import Question from '../models/question'
import Post from '../models/post'

import * as pdf from 'html-pdf'
import * as ejs from 'ejs'

const bookController = {
  async generate(req, res) {
    try {
      const questoes = await Question.find()
      const postagens = await Post.find()

      const material_completo = await ejs.renderFile(
        path.resolve(__dirname, '..', 'views', 'material_completo.ejs'),
        { questions: questoes, posts: postagens })

      const conteudo_perguntas = await ejs.renderFile(
        path.resolve(__dirname, '..', 'views', 'conteudo_perguntas.ejs'),
        { questions: questoes, posts: postagens })
          
      const conteudo = await ejs.renderFile(
        path.resolve(__dirname, '..', 'views', 'conteudo.ejs'),
        { posts: postagens })    
       
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
        
        const materiais = [material_completo, conteudo_perguntas, conteudo]
        
        materiais.map((material, i) => {
          pdf.create(material, options).toFile(
            path.resolve(__dirname, '..', 'assets', 'materials', `material${i + 1}.pdf`), 
            function(err, res){
              if (err) return console.log(err);
              console.log('material gerado com sucesso')
          })
        })

        return res.status(200).send({message: 'materiais gerados com sucesso'}) 
    } catch (err) {
      return res.status(400).send({ message: err })
    }
  },
  async download(req, res) {
    try {     
      const material = path.resolve(__dirname, '..', 'assets', 'materials', `${req.query.material}.pdf`)
      return res.status(200).download(material)
    } catch(err) {
      return res.status(400).send({ message: err })
    }
  }
}

export default bookController
