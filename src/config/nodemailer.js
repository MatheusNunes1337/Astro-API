import nodemailer from 'nodemailer'
import dotenv from 'dotenv'

dotenv.config()

const transporter = nodemailer.createTransport({
	host: process.env.SMTP_CONFIG_HOST,
	port: process.env.SMTP_CONFIG_PORT,
	secure: false,
	auth: {
		user: process.env.SMTP_CONFIG_USER, 
		pass: process.env.SMTP_CONFIG_PASS
	},
	tls:{
        rejectUnauthorized: false
    }
})

export default transporter