import Question from '../../src/models/question'
import School from '../../src/models/school'
import Student from '../../src/models/student'

const mongoose = require('mongoose')

describe('Answer question test', () => {
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
    await mongoose.close()
  })
 
  beforeEach(async () => {
    await Question.deleteMany()
  })
  

  it('should choose the right option', async () => {


    const school = await School.create({
      name: 'Escola exemplo',
      city: 'Bagé',
      state: 'RS',
      responsavel: 'Matheus Nunes',
      email_resp: 'matheus007@gmail.com',
    })

    const mockStudent = { name: 'Matheus', age: 22, school: school._id }
    const student = await Student.create(mockStudent)

    const mockQuestion = {
      question: 'Qual é o maior planeta do sistema solar?',
      category: 'planeta',
      options: ['Saturno', 'Mercúrio', 'Terra', 'Júpiter'],
      answer: 'Júpiter',
    }

    const question = await Question.create(mockQuestion)

    const mockAnswer = { answer: 'Júpiter' }

    if(mockAnswer.answer === question.answer)
        await Student.findByIdAndUpdate(student._id, { acertos: student.acertos + 1 })


    expect(updatedStudent.acertos).toBe(1)  
    
  })

  it('should choose the wrong option', async () => {

    const school = await School.create({
      name: 'Escola exemplo',
      city: 'Bagé',
      state: 'RS',
      responsavel: 'Matheus Nunes',
      email_resp: 'matheus007@gmail.com',
    })

    const mockStudent = { name: 'Matheus', age: 22, school: school._id }
    let student = await Student.create(mockStudent)

    const mockQuestion = {
      question: 'Qual é o maior planeta do sistema solar?',
      category: 'planeta',
      options: ['Saturno', 'Mercúrio', 'Terra', 'Júpiter'],
      answer: 'Júpiter',
    }

    const question = await Question.create(mockQuestion)

    const mockAnswer = { answer: 'Terra' }

    if(mockAnswer.answer === question.answer)
        const updatedStudent = await Student.findByIdAndUpdate(student._id, { acertos: student.acertos + 1 })

     student = await Student.findById(student._id) 

    expect(student.acertos).toBe(0)
    
  })

})