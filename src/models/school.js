import mongoose from 'mongoose'

const { Schema } = mongoose

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
   }
})


const School = mongoose.model('School', schoolSchema);

export default School