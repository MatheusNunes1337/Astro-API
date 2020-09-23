import mongoose from 'mongoose'


mongoose.Promise = global.Promise;
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);

mongoose.connect('mongodb://localhost:27017/astroFono', {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log('conectado com sucesso ao banco de dados'))
.catch(err => console.error('houve um erro ao se conectar ao mongodb', err))

export default mongoose