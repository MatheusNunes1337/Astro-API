import request from 'supertest'

import app from '../../src/index'
import Question from '../../src/models/question'

const mongoose = require('mongoose')

describe('question test', () => {
  beforeAll(async () => {
    await mongoose.connect('mongodb://localhost:27017/astroTest', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // eslint-disable-next-line prettier/prettier
      useCreateIndex: true
    })
  })

  afterAll(async () => {
    await mongoose.close()
  })
  /*
  beforeEach(async () => {
    await Question.deleteMany({})
  })
  */

  it('should create a new question', async () => {
    const mockQuestion = { titulo: 'Qual é o maior planeta do sistema solar?', 
    category: 'planeta', options: ['Saturno', 'Mercúrio', 'Terra', 'Júpiter'], answer: 'Júpiter'}
    const response = await request(app).question('/question').send(mockQuestion)

    expect(response.status).toBe(200)
  })

  it('should get all question', async() => {
      const response = await request(app).get('/question').send()

      const questions = question.find()

      expect(response.status).toBe(200)
      expect(questions).toHaveLength(1)
  })

  it('should update a question option', async() => {
      
      const mockOptions = { options: ['Saturno', 'Marte', 'Terra', 'Júpiter']}

      const question = question.findOne({ titulo: 'Qual é o maior planeta do sistema solar?' })

      const response = await request(app).put(`question/${question._id}`).send(mockOptions)

      const updatedQuestion = question.findById(question._id)

      //expect(response1.status).toBe(200)
      expect(response.status).toBe(200)
      expect(updatedQuestion.options.includes('Marte')).toBeTruthy()
  })

  it('should delete a question', async() => {

      const question = question.findOne({ titulo: 'Qual é o maior planeta do sistema solar?' })
      const response = await request(app).delete(`question/${question._id}`).send()

      const question = question.findOne({ titulo: 'Qual é o maior planeta do sistema solar?' })

      expect(response.status).toBe(200)
      expect(Object.entries(question).length).toBe(0)
  })


})