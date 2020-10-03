import express from 'express'
import dotenv from 'dotenv'
import * as path from 'path'
import routes from './routes'

const app = express()
dotenv.config()

app.use(express.json())

//stattic files
app.use(express.static('./public'))

//set views
app.set("view engine", "ejs");
app.set("views", './src/views');


app.use(routes)


app.listen(process.env.PORT || 8080)

export default app
