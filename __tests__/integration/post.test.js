import request from 'supertest'

import app from '../../src/index'
import Post from '../../src/models/post'

const mongoose = require('mongoose')

describe('post test', () => {
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
    await Post.deleteMany()
    await mongoose.close()
  })
  /*
  beforeEach(async () => {
    await Post.deleteMany({})
  })
  */

  it('should create a new post', async () => {
    const mockPost = {
      titulo: 'O maior planeta do sistema solar',
      conteudo: 'o maior é júpiter',
      categoria: 'planetas',
    }
    const response = await request(app).post('/post/').send(mockPost)

    expect(response.status).toBe(200)
  })

  it('should get all post', async () => {
    const response = await request(app).get('/post/').send()

    const posts = await Post.find()

    expect(response.status).toBe(200)
    // expect(posts).toHaveLength(1)
  })

  it('should update a post category', async () => {
    const mockPost = {
      titulo: 'O maior planeta do sistema solar',
      conteudo: 'o maior é júpiter',
      categoria: 'planeta',
    }

    const post = await Post.findOne({
      titulo: 'O maior planeta do sistema solar',
    })

    const response = await request(app).put(`/post/${post._id}`).send(mockPost)

    const updatedPost = await Post.findById(post._id)

    expect(response.status).toBe(200)
    // expect(updatedPost.categoria).toBe('planeta')
  })

  it('should delete a post', async () => {
    let post = await Post.findOne({
      titulo: 'O maior planeta do sistema solar',
    })
    const response = await request(app).delete(`/post/${post._id}`).send()

    post = await Post.findOne({ titulo: 'O maior planeta do sistema solar' })

    expect(response.status).toBe(200)
    // expect(post).toBeNull()
  })
})
