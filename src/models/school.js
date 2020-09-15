import mongoose from '../database'


const Schema = mongoose.Schema

const schoolSchema = new Schema({
	 name: {
        type: String,
        unique: true
    },
    city: {
        type: String,
        
    },
    state: {
        type: String
    },
    responsavel: {
       type: String 
   },
   email_resp: {
      type: String,
      unique: true
   }
})


const School = mongoose.model('School', schoolSchema);

export default School