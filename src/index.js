import express from 'express'
import dotenv from 'dotenv'


const app = express()
dotenv.config()

app.use(express.json())


app.get('/', (req, res) => {
  res.send(process.env.PORT)
})

app.listen(process.env.PORT || 8080)
