import mongoose from '../database'
import School from './school'


const Schema = mongoose.Schema

const studentSchema = new Schema({
	 name: {
        type: String
    },
    age: {
        type: Number  
    },
    school: {
      type: Schema.Types.ObjectId, 
      req: 'School'
    }
})


const Student = mongoose.model('Student', studentSchema);

export default Student