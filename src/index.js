import express from 'express'
import dotenv from 'dotenv'
import routes from './routes'

require('./database')

const cors = require('cors')

dotenv.config()

class AppController {
  constructor() {
    this.express = express()
    this.middlewares()
    this.cors()
    this.views()
    this.routes()
  }

  middlewares() {
    this.express.use(express.json())
    this.express.use(cors())
    this.express.options('*', cors())
  }

  views() {
    this.express.set('view engine', 'ejs')
    this.express.set('views', './src/views')
  }

  cors() {
    this.express.use(function (req, res, next) {
      res.header('Access-Control-Allow-Origin', '*')
      res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
      )
      next()
    })
  }

  routes() {
    this.express.use(routes)
  }
}

/*
app.use(express.json())

// cors
app.use(cors())
app.options('*', cors())

// static files
// app.use(express.static('./public'))

// set views
app.set('view engine', 'ejs')
app.set('views', './src/views')

app.use(routes)

app.listen(process.env.PORT || 3333)
*/

module.exports = new AppController().express
