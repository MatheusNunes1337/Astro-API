import request from 'supertest'

import app from '../../src/index'
import Admin from '../../src/models/admin'

const mongoose = require('mongoose')

describe('admin test', () => {
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
    await Admin.deleteMany({})
  })
  */

  it('should create a new admin', async () => {
    const mockAdmin = { username: 'admin2', password: '123456' }
    const response = await request(app).post('/auth/register').send(mockAdmin)

    expect(response.status).toBe(200)
  })

  it('should update the admins password', async() => {
      //const mockAdmin1 = { username: 'admin2', password: '123456' }
      const mockAdmin2 = { username: 'admin2', password: '654321' }

      //const response1 = await request(app).post('/auth/register').send(mockAdmin1)

      const admin = Admin.findOne({ username: 'admin2' })

      const response2 = await request(app).put(`admin/${admin._id}`).send(mockAdmin2)

      const updatedAdmin = Admin.findById(admin._id)

      //expect(response1.status).toBe(200)
      expect(response2.status).toBe(200)
      expect(updatedAdmin.password).toBe('654321')
  })

  it('should delete the admin account', async() => {

      const admin = Admin.findOne({ username: 'admin2' })
      const response = await request(app).delete(`admin/${admin._id}`).send()

       const admin = Admin.findOne({ username: 'admin2' }) 

      expect(response.status).toBe(200)
      expect(admin.hasOwnProperty('username')).toBeFalsy()
  })


})