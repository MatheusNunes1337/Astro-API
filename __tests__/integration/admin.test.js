import request from 'supertest'

import app from '../../src/index'
import Admin from '../../src/models/admin'

const mongoose = require('mongoose')

describe('insert', () => {
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
  beforeEach(async () => {
    await Admin.deleteMany({})
  })

  it('should create a new admin', async () => {
    const mockAdmin = { username: 'admin2', password: '123456' }
    const response = await request(app).post('/auth/register').send(mockAdmin)

    const user = Admin.findOne({ username: 'admin2' })

    expect(response.status).toBe(201)
  })
})
