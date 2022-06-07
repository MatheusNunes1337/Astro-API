import express from 'express'
import dotenv from 'dotenv'
import routes from './routes'

const cors = require('cors')

const app = express()
dotenv.config()

app.use(express.json())

// cors
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'https://astrooo.herokuapp.com')
  app.use(cors())
  next()
})

// static files
// app.use(express.static('./public'))

// set views
app.set('view engine', 'ejs')
app.set('views', './src/views')

app.use(routes)

app.listen(process.env.PORT || 3333)

export default app
