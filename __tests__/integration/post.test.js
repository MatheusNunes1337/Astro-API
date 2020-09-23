import request from 'supertest'

import app from '../../src/index'
import Post from '../../src/models/post'

const mongoose = require('mongoose')

describe('post test', () => {
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

  it('should create a new post', async () => {
    const mockPost = { titulo: 'O maior planeta do sistema solar', conteudo: 'o maior é júpiter', categoria: 'planetas'}
    const response = await request(app).post('/post').send(mockPost)

    expect(response.status).toBe(200)
  })

  it('should get all post', async() => {
      const response = await request(app).get('/post').send()

      const posts = Post.find()

      expect(response.status).toBe(200)
      expect(posts).toHaveLength(1)
  })

  it('should update a post category', async() => {
      //const mockPost1 = { titulo: 'O maior planeta do sistema solar', conteudo: 'o maior é júpiter', 'categoria': 'planetas'}
       const mockPost = { titulo: 'O maior planeta do sistema solar', conteudo: 'o maior é júpiter', categoria: 'planeta'}

      //const response = await request(app).post('/post').send(mockPost1)

      const post = Post.findOne({ titulo: 'O maior planeta do sistema solar' })

      const response = await request(app).put(`post/${post._id}`).send(mockPost)

      const updatedPost = Post.findById(post._id)

      //expect(response1.status).toBe(200)
      expect(response.status).toBe(200)
      expect(updatedPost.categoria).toBe('planeta')
  })

  it('should delete a post', async() => {

      const post = Post.findOne({ titulo: 'O maior planeta do sistema solar' })
      const response = await request(app).delete(`post/${post._id}`).send()

      const post = Post.findOne({ titulo: 'O maior planeta do sistema solar' })

      expect(response.status).toBe(200)
      expect(Object.entries(post).length).toBe(0)
  })


})