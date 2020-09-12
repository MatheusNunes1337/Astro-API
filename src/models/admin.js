import mongoose from '../database'
import bcrypt from 'bcrypt'

const Schema = mongoose.Schema

const adminSchema = new Schema({
	 username: {
        type: String,
        minlength: [6, 'O nome de usuário deve conter no mínimo 6 caracteres'],
        maxlength: [12, 'O nome de usuário deve conter no máximo 12 caracteres'],
        unique: true
    },
    password: {
        type: String,
        select: false,
        minlength: [6, 'A senha deve ter no mínimo 6 caracteres'],
        maxlength: [12, 'A senha deve ter no máximo 12 caracteres']
    }
})

adminSchema.pre('save', async function (next) {
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;
    next();
})

const Admin = mongoose.model('Admin', adminSchema);

export default Admin