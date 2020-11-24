import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

if (process.env.NODE_ENV === 'development') {
  mongoose
    .connect(process.env.mongo_url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      // eslint-disable-next-line prettier/prettier
        useCreateIndex: true
    })
    .then(() => console.log('conectado com sucesso ao banco de dados'))
    .catch((err) => console.log('houve um erro ao se conectar ao mongodb', err))
}

export default mongoose
