import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import * as path from 'path'
import routes from './routes'

const app = express()
dotenv.config()

app.use(express.json())

//cors
app.use(cors())
app.options('*', cors())

//static files
//app.use(express.static('./public'))

//set views
app.set("view engine", "ejs");
app.set("views", './src/views');


app.use(routes)

app.listen(process.env.PORT || 3333)

export default app
