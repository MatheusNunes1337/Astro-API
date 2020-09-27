import request from 'supertest'

import app from '../../src/index'
import Student from '../../src/models/student'
import School from '../../src/models/school'

const mongoose = require('mongoose')

describe('student test', () => {
  beforeAll(async () => {
    await mongoose.connect('mongodb://localhost:27017/astroTest', {
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
      // eslint-disable-next-line prettier/prettier
      useCreateIndex: true
    })
  })

  afterAll(async () => {
    await Student.deleteMany()
    await School.deleteMany()
    await mongoose.close()
  })
  /*
  beforeEach(async () => {
    await Post.deleteMany({})
  })
  */

  it('should create a new student', async () => {
    const school = await School.create({
      name: 'Escola exemplo',
      city: 'Bagé',
      state: 'RS',
      responsavel: 'Matheus Nunes',
      email_resp: 'matheus007@gmail.com',
    })

    const mockstudent1 = { name: 'Matheus', age: 22, school: school._id }

    const mockstudent2 = { name: 'John Doe', age: 18, school: school._id }

    const response1 = await request(app).post('/student/').send(mockstudent1)
    const response2 = await request(app).post('/student/').send(mockstudent2)

    expect(response1.status).toBe(200)
    expect(response2.status).toBe(200)
  })

  it('should get all students', async () => {
    const response = await request(app).get('/student').send()

    const students = await Student.find()

    expect(response.status).toBe(200)
    expect(students).toHaveLength(2)
  })

  it('should update a student age', async () => {
    const mockStudent = { name: 'John doe', age: 19, school: 15 }

    const student = await Student.findOne({ name: 'John Doe' })

    const response = await request(app)
      .put(`/student/${student._id}`)
      .send(mockStudent)

    const updatedStudent = await Student.findById(student._id)

    expect(response.status).toBe(200)
    expect(updatedStudent.age).toBe(19)
    expect(updatedStudent.name).toBe('John Doe')
  })

  it('should delete a student', async () => {
    let student = await Student.findOne({ name: 'John Doe' })
    const response = await request(app).delete(`/student/${student._id}`).send()

    student = await Student.findOne({ name: 'John Doe' })

    expect(response.status).toBe(200)
    expect(student).toBeNull()
  })
})
