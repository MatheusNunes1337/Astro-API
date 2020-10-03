import express from 'express'
import dotenv from 'dotenv'
import * as path from 'path'
import routes from './routes'

const app = express()
dotenv.config()

app.use(express.json())

app.use('/public', express.static(path.join(__dirname, '/public')))

app.use(routes)

app.get('/', (req, res) => {
  res.send(process.env.PORT)
})

app.listen(process.env.PORT || 8080)

export default app
