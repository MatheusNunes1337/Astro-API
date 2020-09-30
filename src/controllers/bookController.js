const pdf = require('html-pdf')
const ejs = require('ejs')
import { resolve } from 'path'
import Question from '../models/question'


const bookController = {

  async create(req, res) {
    
    try {

      const questoes = await Question.find()
   
      ejs.renderFile(`${__dirname}/../view/book.ejs`, {questions: questoes}, (err, book) => {
          if(err)
            console.log(err)
          else {
            const options = { filename: 'apostila.pdf', format: 'A4', 
            orientation: 'portrait', directory: resolve(__dirname, '..', '..', 'temp', 'uploads') ,type: "pdf" }

            pdf.create(book, options).toFile(function(err, res) {
                if (err)
                  return console.log({message: err});
                
            });
          }
      })

       return res.status(200).send({ message: 'pdf gerado com sucesso' })     

    
    } catch (err) {
      return res.status(400).send({ message: err })
    }
  }

}


export default bookController


