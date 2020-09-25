import request from 'supertest'

import app from '../../src/index'
import Admin from '../../src/models/admin'

const mongoose = require('mongoose')

describe('admin test', () => {
  beforeAll(async () => {
    await mongoose.connect('mongodb://localhost:27017/astroTest', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      // eslint-disable-next-line prettier/prettier
      useCreateIndex: true
    })
  })

  afterAll(async () => {
    await Admin.deleteMany()
    await mongoose.close()
  })
  /*
  beforeEach(async () => {
    await Admin.deleteMany({})
  })
  */

  it('should create a new admin', async () => {
    const mockAdmin = { username: 'admin2', password: '123456' }
    const response = await request(app).post('/auth/register/').send(mockAdmin)

    expect(response.status).toBe(200)
  })

  it('should get all admins', async () => {
    const response = await request(app).get('/admin/').send()

    const admins = await Admin.find()

    expect(response.status).toBe(200)
    expect(admins).toHaveLength(1)
  })

  it('should update the admins username', async () => {
    const mockAdmin = { username: 'admin007', password: '123456' }

    const admin = await Admin.findOne({ username: 'admin2' })

    const response = await request(app)
      .put(`/admin/${admin._id}`)
      .send(mockAdmin)

    const updatedAdmin = await Admin.findById(admin._id)

    expect(response.status).toBe(200)
    expect(updatedAdmin.username).toBe('admin007')
  })

  it('should delete the admin account', async () => {
    let admin = await Admin.findOne({ username: 'admin007' })
    const response = await request(app).delete(`/admin/${admin._id}`).send()

    admin = await Admin.findOne({ username: 'admin007' })

    expect(response.status).toBe(200)
    expect(admin).toBeNull()
  })
})
