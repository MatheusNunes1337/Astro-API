import request from 'supertest'

import app from '../../src/index'
import School from '../../src/models/school'

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
    await Post.deleteMany({})
  })
  */

  it('should create a new question', async () => {
    const mockSchool1 = { name: 'Escola exemplo', city: 'Bagé', state: 'RS',
    responsavel: 'Matheus Nunes', email_resp: 'matheus007@gmail.com'}

    const mockSchool2 = { name: 'Escola Exemplo 2', city: 'Los angeles', state: 'CA',
    responsavel: 'Matheus Nunes', email_resp: 'matheus1337@gmail.com'}  
    const response1 = await request(app).post('/school').send(mockSchool1)
    const response2 = await request(app).post('/school').send(mockSchool2)

    expect(response1.status).toBe(200)
    expect(response2.status).toBe(200)
  })

  it('should get all school', async() => {
      const response = await request(app).get('/school').send()

      const schools = School.find()

      expect(response.status).toBe(200)
      expect(schools).toHaveLength(2)
  })

  it('should update a school city', async() => {
      
      const mockSchool = { name: 'Escola exemplo', city: 'Pelotas', state: 'RS',
      responsavel: 'Matheus Nunes', email_resp: 'matheus007@gmail.com'} 

   
      const school = School.findOne({ name: 'Escola exemplo' })

      const response = await request(app).put(`school/${school._id}`).send(mockSchool)

      const updatedSchool = School.findById(school._id)

      //expect(response1.status).toBe(200)
      expect(response.status).toBe(200)
      expect(updatedSchool.city).toBe('Pelotas')
  })

  it('should delete a school', async() => {

      const school = School.findOne({ name: 'Escola exemplo' })
      const response = await request(app).delete(`school/${school._id}`).send()

      const school = School.findOne({ name: 'Escola exemplo' })

      expect(response.status).toBe(200)
      expect(Object.entries(school).length).toBe(0)
  })


})